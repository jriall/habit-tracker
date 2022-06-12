import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { HabitsService } from "./habits.service";
import { HabitsController } from "./habits.controller";
import { ActivityLogsController } from "./activity-logs.controller";
import { ActivityLogsService } from "./activity-logs.service";
import { Habit } from "./entities/habit.entity";
import { ActivityLog } from "./entities/activity-log.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ActivityLog, Habit])],
  controllers: [HabitsController, ActivityLogsController],
  providers: [HabitsService, ActivityLogsService],
})
export class HabitsModule {}
