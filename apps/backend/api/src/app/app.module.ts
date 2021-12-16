import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {TypeOrmModule} from "@nestjs/typeorm";

import {environment} from "../environments/environment";
import {AppController} from './app.controller';
import {AuthModule} from './auth/auth.module';
import {resolverMap} from "./app.resolver";

import { UsersUiModule } from '@mean/backend/web/users/ui';
import { UserEntity } from '@mean/backend/web/users/feature';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
      entities: [UserEntity],
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql', ],
      context: ({req}) => ({req}),
      playground: true,
      resolvers: [resolverMap],
    }),
    AuthModule,
    UsersUiModule,
  ],
  controllers: [AppController],
})
export class AppModule {
}
