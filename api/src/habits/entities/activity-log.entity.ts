import {
  Column,
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

  @Column({ type: "timestamptz" })
  public date: Date;

  @ManyToOne(() => Habit, (habit) => habit.activityLogs)
  @JoinColumn({ name: "habitId" })
  public habit: Habit;

  // Create and Update Date Columns
  @CreateDateColumn({ type: "timestamp" })
  public createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updatedAt!: Date;
}
