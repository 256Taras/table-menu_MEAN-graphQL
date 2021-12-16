import { IUser } from '@mean/shared/utils/interfaces';

export class UserCreatedEvent {
  public constructor(
    public readonly payload: IUser
  ) {
    console.log("in crette",payload);
  }
}
