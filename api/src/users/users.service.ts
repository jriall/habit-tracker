import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  create(body: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.name = body.name;

    return this.repository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repository.find({
      order: {
        name: "ASC",
        id: "DESC",
      },
    });
  }

  findOne(id: number): Promise<User> {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
