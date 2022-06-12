import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";

import { UpdateActivityLogDto } from "./dto/update-activity-log.dto";
import { ActivityLog } from "./entities/activity-log.entity";
import { Habit } from "./entities/habit.entity";

@Injectable()
export class ActivityLogsService {
  @InjectRepository(ActivityLog)
  private readonly activityLogRespository: Repository<ActivityLog>;

  @InjectRepository(Habit)
  private readonly habitRespository: Repository<Habit>;

  async create(habitId: number): Promise<ActivityLog> {
    const activityLog: ActivityLog = new ActivityLog();

    const habit = await this.habitRespository.findOne({
      where: {
        id: habitId,
      },
    });

    activityLog.habit = habit;

    return this.activityLogRespository.save(habit);
  }

  findAll(): Promise<ActivityLog[]> {
    return this.activityLogRespository.find({
      order: {
        id: "DESC",
      },
      loadRelationIds: { relations: ["habit"] },
    });
  }

  findOne(id: number): Promise<ActivityLog> {
    return this.activityLogRespository.findOne({
      where: {
        id,
      },
      loadRelationIds: { relations: ["habit"] },
    });
  }

  update(id: number, updateHabitDto: UpdateActivityLogDto) {
    return `This action updates a #${id} activity log`;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.activityLogRespository.delete(id);
  }
}
