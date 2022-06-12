import { Module } from "@nestjs/common";

import { HabitsService } from "./habits.service";
import { HabitsController } from "./habits.controller";
import { ActivityLogsController } from "./activity-logs.controller";
import { ActivityLogsService } from "./activity-logs.service";

@Module({
  controllers: [HabitsController, ActivityLogsController],
  providers: [HabitsService, ActivityLogsService],
})
export class HabitsModule {}
