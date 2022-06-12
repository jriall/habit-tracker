import { Injectable } from "@nestjs/common";

import { CreateActivityLogDto } from "./dto/create-activity-log.dto";
import { UpdateActivityLogDto } from "./dto/update-activity-log.dto";

@Injectable()
export class ActivityLogsService {
  create(createActivityLogDto: CreateActivityLogDto) {
    return "This action adds a new activity log";
  }

  findAll() {
    return `This action returns all activity logs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activity log`;
  }

  update(id: number, updateHabitDto: UpdateActivityLogDto) {
    return `This action updates a #${id} activity log`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity log`;
  }
}
