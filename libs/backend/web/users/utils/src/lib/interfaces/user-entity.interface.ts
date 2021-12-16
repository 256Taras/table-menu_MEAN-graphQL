import { IUser } from '@mean/shared/utils/interfaces';

export abstract class IUserEntity {

  public readonly _props: IUser
  get id(): number {
    return this._props.id;
  }

  get email(): string {
    return this._props.email;
  }

  get username(): string {
    return this._props.username;
  }

  get nickname(): string | null {
    return this._props.nickname;
  }

  get phone(): string | null {
    return this._props.phone;
  }

  get created(): string {
    return this._props.created;
  }

  get updated(): string {
    return this._props.updated;
  }

  get password(): string {
    return this._props.password;
  }

  readonly props: () => Partial<IUser>;

}
