import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";

import { ActivityLogsService } from "./activity-logs.service";
import { UpdateActivityLogDto } from "./dto/update-activity-log.dto";

@Controller("habits/:habitId/activity-logs")
export class ActivityLogsController {
  constructor(private readonly activityLogsService: ActivityLogsService) {}

  @Post()
  create(@Param("habitId") habitId: string) {
    return this.activityLogsService.create(+habitId);
  }

  @Get()
  findAll() {
    return this.activityLogsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.activityLogsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateActivityLogDto: UpdateActivityLogDto,
  ) {
    return this.activityLogsService.update(+id, updateActivityLogDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.activityLogsService.remove(+id);
  }
}
