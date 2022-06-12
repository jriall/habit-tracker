import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
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
  async findOne(@Param("id") id: string) {
    const activityLog = await this.activityLogsService.findOne(+id);

    if (!activityLog) {
      throw new HttpException('ActivityLog not found', HttpStatus.NOT_FOUND);
    }

    return activityLog;
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateActivityLogDto: UpdateActivityLogDto,
  ) {
    return this.activityLogsService.update(+id, updateActivityLogDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    const deleteResult = await this.activityLogsService.remove(+id);

    if (deleteResult.affected === 0) {
      throw new HttpException('ActivityLog not found', HttpStatus.NOT_FOUND);
    }

    return deleteResult;
  }
}
