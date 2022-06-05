import { HabitInterval } from "src/common/constants/habits";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Habit {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: "varchar", length: 120 })
  public name: string;

  @Column({ type: "varchar", nullable: true })
  public description: string;

  @Column({ type: "enum", enum: HabitInterval })
  public habitInterval: HabitInterval;

  @Column({ type: "int" })
  public habitFrequency: number;

  @Column({ type: "boolean", default: "false" })
  public isArchived: boolean;

  // Create and Update Date Columns
  @CreateDateColumn({ type: "timestamp" })
  public createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updatedAt!: Date;
}
