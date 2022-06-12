import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { DeleteResult, Repository } from "typeorm";

import { CreateHabitDto } from "./dto/create-habit.dto";
import { UpdateHabitDto } from "./dto/update-habit.dto";
import { Habit } from "./entities/habit.entity";

@Injectable()
export class HabitsService {
  @InjectRepository(Habit)
  private readonly habitRepository: Repository<Habit>;

  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async create(body: CreateHabitDto, userId: number): Promise<Habit> {
    const habit: Habit = new Habit();

    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    const { name, habitFrequency, description, habitInterval } = body;

    habit.name = name;
    habit.description = description;
    habit.habitFrequency = habitFrequency;
    habit.habitInterval = habitInterval;
    habit.user = user;

    return this.habitRepository.save(habit);
  }

  async findAll(): Promise<Habit[]> {
    return this.habitRepository.find({
      order: {
        name: "ASC",
        id: "DESC",
      },
      loadRelationIds: { relations: ["user"] },
    });
  }

  findOne(id: number): Promise<Habit> {
    return this.habitRepository.findOne({
      where: {
        id,
      },
      loadRelationIds: { relations: ["user"] },
    });
  }

  update(id: number, updateHabitDto: UpdateHabitDto) {
    return `This action updates a #${id} habit`;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.habitRepository.delete(id);
  }
}
