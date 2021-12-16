import { Module } from '@nestjs/common';
import { UserCommandsCommon } from './commands/user-commands.common';
import { UsersService } from './services/users.service';

import { OrmUserEntity, UsersDataAccessModule } from '@mean/backend/web/users/data-access';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFactory } from './domain/user.factory';
import { UsersSagas } from './sagas/users.sagas';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrmUserEntity]),
    CqrsModule,
    UsersDataAccessModule,
  ],
  providers: [
    UsersService,
    ...UserCommandsCommon,
    UserFactory,
    UsersSagas
  ],
  exports: [
    UsersService,
    UserFactory
  ]
})
export class UsersFeatureModule {
}
