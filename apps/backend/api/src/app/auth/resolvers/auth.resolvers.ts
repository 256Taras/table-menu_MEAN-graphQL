import {Query, Resolver} from "@nestjs/graphql";

import {AuthService} from "../services/auth.service";
import {SingIn} from "../decorators/auth.decorator";

import type {ISignAuthResponse, ISingAuth} from "@mean/shared/data-access/interfaces";

@Resolver('Auth')
export class AuthResolvers {
  constructor(private readonly authService: AuthService) {
  }

  @Query("login")
  public async login(@SingIn() signInPayload: ISingAuth): Promise<ISignAuthResponse> {
    return this.authService.login(signInPayload)
  }

  @Query("logout")
  public async logout(): Promise<boolean> {
    return true
  }
}
