import { Query, Resolver } from '@nestjs/graphql';

import { AuthService } from '../services/auth.service';
import { SingIn } from '../decorators/auth.decorator';

import type {
  ISignAuthPayload,
  ISignAuthResponse,
} from '@mean/shared/utils/interfaces';

@Resolver('Auth')
export class AuthResolvers {
  constructor(private readonly authService: AuthService) {}

  @Query('login')
  public async login(
    @SingIn() signInPayload: ISignAuthPayload
  ): Promise<ISignAuthResponse> {
    return this.authService.login(signInPayload);
  }

  @Query('logout')
  public async logout(): Promise<boolean> {
    return true;
  }
}
