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

import { HabitsService } from "./habits.service";
import { CreateHabitDto } from "./dto/create-habit.dto";
import { UpdateHabitDto } from "./dto/update-habit.dto";

@Controller("habits")
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Post()
  create(@Body() createHabitDto: CreateHabitDto) {
    // TODO(jriall): Use real user ID from auth.
    const userId = 2;
    return this.habitsService.create(createHabitDto, userId);
  }

  @Get()
  findAll() {
    return this.habitsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const habit = await this.habitsService.findOne(+id);

    if (!habit) {
      throw new HttpException('Habit not found', HttpStatus.NOT_FOUND);
    }

    return habit;
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.habitsService.update(+id, updateHabitDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    const deleteResult = await this.habitsService.remove(+id);

    if (deleteResult.affected === 0) {
      throw new HttpException('Habit not found', HttpStatus.NOT_FOUND);
    }

    return deleteResult;

  }
}
