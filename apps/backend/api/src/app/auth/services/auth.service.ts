import {Injectable} from "@nestjs/common";
import {ISignAuthResponse} from "@mean/shared/data-access/interfaces";


@Injectable()
export class AuthService {
  public login(singInPayload): Promise<ISignAuthResponse> {
    return null
  }

}
