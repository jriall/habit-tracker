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
import { DeleteResult } from "typeorm";

import { HabitsService } from "./habits.service";
import { CreateHabitDto } from "./dto/create-habit.dto";
import { UpdateHabitDto } from "./dto/update-habit.dto";
import { Habit } from "./entities/habit.entity";

@Controller("habits")
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Post()
  create(@Body() createHabitDto: CreateHabitDto): Promise<Habit> {
    // TODO(jriall): Use real user ID from auth.
    const userId = 2;
    return this.habitsService.create(createHabitDto, userId);
  }

  @Get()
  findAll(): Promise<Habit[]> {
    return this.habitsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Habit> {
    const habit = await this.habitsService.findOne(+id);

    if (!habit) {
      throw new HttpException("Habit not found", HttpStatus.NOT_FOUND);
    }

    return habit;
  }

  // TODO(jriall): Add patch action and update type.
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.habitsService.update(+id, updateHabitDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<DeleteResult> {
    const deleteResult = await this.habitsService.remove(+id);

    if (deleteResult.affected === 0) {
      throw new HttpException("Habit not found", HttpStatus.NOT_FOUND);
    }

    return deleteResult;
  }
}
