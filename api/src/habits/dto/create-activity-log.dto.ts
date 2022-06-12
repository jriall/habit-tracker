import { IsInt } from "class-validator";

export class CreateActivityLogDto {
  @IsInt()
  habitId: number;
}
