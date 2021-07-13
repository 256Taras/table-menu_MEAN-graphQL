import {Injectable, UnauthorizedException} from "@nestjs/common";
import {ISignAuthResponse, ISingAuth} from "@mean/shared/data-access/interfaces";
import {JwtService} from "@nestjs/jwt";

import {UserService} from "../../users/services/user.service";
import {PasswordService} from "./password.service";
import {UserEntity} from "../../users/entities/user.entity";
import { environment } from "../../../environments/environment";


@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly passwordService: PasswordService,
  ) {
  }

  public async validateUser(username: string, password: string): Promise<Omit<UserEntity, 'password'>> {
    const user = await this.userService.findOneByUserName(username)

    const isValid = user ? await this.passwordService.compareHash(password, user.password) : null

    if (isValid) {
      delete user.password
      return user
    }

    return null

  }

  public async login(signInPayload: ISingAuth): Promise<ISignAuthResponse> {
    const user = await this.validateUser(signInPayload.username, signInPayload.password)

    if (!user) {
      throw new UnauthorizedException()
    }

    const payload = {username: user.username, userId: user.id}

    return {
      accessToken: this.jwtService.sign(payload),
      expiresIn: new Date(environment.jwt.expiresIn).getDate(),
      id: user.id,
    }
  }

}
