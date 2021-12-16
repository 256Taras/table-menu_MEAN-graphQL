import { Module } from '@nestjs/common';

import { UserRepository } from './repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmUserEntity } from './orm-entities/orm-users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrmUserEntity])
  ],
  providers: [
    UserRepository
  ],
  exports: [
    UserRepository
  ]
})
export class UsersDataAccessModule {
}
