import {Module} from '@nestjs/common';

import {AppController} from './app.controller';

import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {environment} from "../environments/environment";
import {GraphQLModule} from "@nestjs/graphql";
import {AppResolver} from "./app.resolver";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
          return environment.connection(configService)
        }
      }
    ),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({req}) => ({req}),
      playground: true
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {
}
