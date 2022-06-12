import { IsEnum, IsInt, IsNotEmpty, IsString, Min } from "class-validator";
import { HabitInterval } from "src/common/constants/habits";

export class CreateHabitDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsEnum(HabitInterval)
  public habitInterval: HabitInterval;

  @IsInt()
  @Min(1)
  public habitFrequency: number;
}
