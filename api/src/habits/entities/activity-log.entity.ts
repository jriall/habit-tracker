import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Habit } from "./habit.entity";

@Entity()
export class ActivityLog {
  @PrimaryGeneratedColumn()
  public id!: number;

  @ManyToOne(() => Habit, (habit) => habit.activityLogs)
  @JoinColumn({ name: "habitId" })
  habit: Habit;

  // Create and Update Date Columns
  @CreateDateColumn({ type: "timestamp" })
  public createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updatedAt!: Date;
}
