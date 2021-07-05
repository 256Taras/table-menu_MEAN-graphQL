import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {environment} from "../environments/environment";

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
  }),
    TypeOrmModule.forRootAsync({
        imports:[ConfigModule],
        inject:[ConfigService],
        useFactory:(configService:ConfigService)=>{
          return  environment.connection(configService)
        }
      }
    ),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
