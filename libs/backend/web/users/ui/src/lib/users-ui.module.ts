import { Module } from '@nestjs/common';

import { UserResolver } from './resolvers/user.resolver';
import { UsersFeatureModule } from '@mean/backend/web/users/feature';

@Module({
  imports:[
    UsersFeatureModule
  ],
  providers: [
    UserResolver
  ],
  exports: [
    UserResolver,
  ]
})
export class UsersUiModule {
}
