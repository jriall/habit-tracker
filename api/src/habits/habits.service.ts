import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";

import { CreateHabitDto } from "./dto/create-habit.dto";
import { UpdateHabitDto } from "./dto/update-habit.dto";
import { Habit } from "./entities/habit.entity";

@Injectable()
export class HabitsService {
  @InjectRepository(Habit)
  private readonly repository: Repository<Habit>;

  create(body: CreateHabitDto): Promise<Habit> {
    const habit: Habit = new Habit();

    const { name, habitFrequency, description, habitInterval } = body;

    habit.name = name;
    habit.description = description;
    habit.habitFrequency = habitFrequency;
    habit.habitInterval = habitInterval;

    return this.repository.save(habit);
  }

  findAll(): Promise<Habit[]> {
    return this.repository.find({
      order: {
        name: "ASC",
        id: "DESC",
      },
    });
  }

  findOne(id: number): Promise<Habit> {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateHabitDto: UpdateHabitDto) {
    return `This action updates a #${id} habit`;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
