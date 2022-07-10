import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateActivityLogDto {
  @IsDate()
  @IsNotEmpty()
  public date: Date;

  @IsString()
  @IsNotEmpty()
  public habitId: number;
}
