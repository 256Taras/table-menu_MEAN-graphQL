import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ISignAuthPayload, ISignAuthResponse } from '@mean/shared/utils/interfaces';

import { PasswordService } from './password.service';
import { environment } from '../../../environments/environment';
import { OrmUserEntity } from '@mean/backend/web/users/data-access';
import { UsersService } from '@mean/backend/web/users/feature';


@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
    private readonly passwordService: PasswordService
  ) {
  }

  public async validateUser(username: string, password: string): Promise<Omit<OrmUserEntity, 'password'>> {
    const user = await this.userService.findOneByUserName(username);

    const isValid = user ? await this.passwordService.compareHash(password, user.password) : null;

    if (isValid) {
      delete user.password;
      return user;
    }

    return null;

  }

  public async login(signInPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
    const user = await this.validateUser(signInPayload.username, signInPayload.password);
    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.username, userId: user.id };
    const eIn = new Date(environment.jwt.expiresIn).getDate();
    return {
      accessToken: this.jwtService.sign(payload),
      expiresIn: eIn,
      id: user.id
    };
  }

}
