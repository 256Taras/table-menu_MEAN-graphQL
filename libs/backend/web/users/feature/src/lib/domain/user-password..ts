// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { BaseValueObject, Result } from "@mean/backend/web/shared/feature/core";
import { Cryption } from '@mean/backend/web/shared/utils/helpers/cryption';

export interface IUserPasswordProps {
  value: string;
  hashed?: boolean;
}

export class UserPassword extends BaseValueObject<IUserPasswordProps> {
  public static minLength = 6;

  get value(): string {
    return this.props.value;
  }

  private constructor(props: IUserPasswordProps) {
    super(props);
  }

  private static isAppropriateLength(password: string): boolean {
    return password.length >= this.minLength;
  }

  /**
   * @method comparePassword
   * @desc Compares as plain-text and hashed password.
   */

  private async _comparePassword(password: string): Promise<boolean> {
    return await Cryption.compareHash(password, this.props.value);
  }

  public isAlreadyHashed(): boolean {
    return this.props.hashed;
  }

  private async _hashPassword(password: string): Promise<string> {
    return await Cryption.getHash(password);
  }

  public getHashedValue(): Promise<string> {
    return new Promise((resolve) => {
      if (this.isAlreadyHashed()) {
        return resolve(this.props.value);
      } else {
        return resolve(this._hashPassword(this.props.value));
      }
    });
  }

  public static create(props: IUserPasswordProps): Result<UserPassword> {
    if (!props.value) {
      return Result.fail<UserPassword>('password is required');
    }

    if (!props.hashed && !this.isAppropriateLength(props.value)) {
      return Result.fail<UserPassword>(
        'Password doesnt meet criteria [8 chars min].'
      );
    }

    return Result.ok<UserPassword>(
      new UserPassword({
        value: props.value,
        hashed: !!props.hashed === true,
      })
    );
  }

  public async updatePassword(
    currentPassword: string,
    newPassword: string
  ): Promise<Result<UserPassword>> {
    if (!(await this._comparePassword(currentPassword))) {
      return Result.fail<UserPassword>('Password not match');
    }

    this.props.value = await this._hashPassword(newPassword);
  }
}
