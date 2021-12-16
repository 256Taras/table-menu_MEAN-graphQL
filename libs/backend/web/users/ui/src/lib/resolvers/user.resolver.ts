import { Body, UseGuards } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { CurrentUser } from '../decorators/user.decorator';

import { GqlAuthGuard } from '../guards/gql.auth-guard';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UsersService } from '@mean/backend/web/users/feature';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { OrmUserEntity } from '@mean/backend/web/users/data-access';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ISignUpPayload } from '@mean/shared/utils/interfaces';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { TCreateUserResult } from 'libs/backend/web/users/utils/src/lib/interfaces/create-user-result.type';


@Resolver('User')
export class UserResolver {
  public constructor(private readonly userService: UsersService) {}

  @Query('user')
  @UseGuards(GqlAuthGuard)
  public async whoAmI(@CurrentUser() user: OrmUserEntity) {
    return await this.userService.findOneById(user.id);
  }

  @Mutation('signup')
  public signUp(@Body('input') payload: ISignUpPayload): TCreateUserResult {
    return this.userService.createUser(payload);
  }
}
