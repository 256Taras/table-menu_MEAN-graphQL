// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ISignUpPayload } from '@mean/shared/utils/interfaces';

export class CreateUserCommand {
  public constructor(
    public readonly payload: ISignUpPayload
  ) {
  }
}
