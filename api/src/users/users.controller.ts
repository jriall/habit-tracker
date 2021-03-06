import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { DeleteResult } from "typeorm";

import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Controller("users")
export class UsersController {
  @Inject(UsersService)
  private readonly usersService: UsersService;

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<User> {
    const user = await this.usersService.findOne(+id);

    if (!user) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    return user;
  }

  // TODO(jriall): Add patch service action and update type.
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<DeleteResult> {
    const deleteResult = await this.usersService.remove(+id);

    if (deleteResult.affected === 0) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    return deleteResult;
  }
}
