import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { getEnvPath } from "../common/helper/env.helper";
import { TypeOrmConfigService } from "../common/typeorm/typeorm.service";
import { UsersModule } from "../users/users.module";
import { HabitsModule } from "../habits/habits.module";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    HabitsModule,
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
