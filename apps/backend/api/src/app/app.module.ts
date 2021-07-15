import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {TypeOrmModule} from "@nestjs/typeorm";

import {environment} from "../environments/environment";
import {AppController} from './app.controller';
import {AuthModule} from './auth/auth.module';
import {UserEntity} from './users/entities/user.entity';
import {resolverMap} from "./app.resolver";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
      entities: [UserEntity],
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({req}) => ({req}),
      playground: true,
      resolvers: [resolverMap],
    }),
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {
}
