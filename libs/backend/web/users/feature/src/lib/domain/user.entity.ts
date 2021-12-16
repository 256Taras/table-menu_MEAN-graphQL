import { IUser } from '@mean/shared/utils/interfaces';

import { UserCreatedEvent } from '../events/created-user/user-created.event';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { BaseEntity, Result } from '@mean/backend/web/shared/feature/core';

export class UserEntity extends BaseEntity<IUser>  {

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

  public constructor(props) {
    super(props);
  }

  public props(): IUser {
    return {
      id: this._props.id,
      email: this._props.email,
      phone: this._props.phone,
      username: this._props.username,
      password: this._props.password,
      nickname: this._props.nickname,
      //FixMe - change main interface to type Date
      created: `${new Date()}`,
      updated: this._props.updated
    };
  }

  public static create(props: IUser): Result<IUser> {

    if (!props) {
      return Result.fail<IUser>('Data is required');
    }

    const user = new UserEntity({
      ...props
    });

    return Result.ok<IUser>(user);
  }

  public wasCreated (){
    console.log("wasCreated");
    this.apply(new UserCreatedEvent(this._props));
  }
}
