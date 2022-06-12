import { HabitInterval } from "src/common/constants/habits";
import { User } from "src/users/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { ActivityLog } from "./activity-log.entity";

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

  @OneToMany(() => ActivityLog, (activityLog) => activityLog.habit)
  activityLogs: ActivityLog[];

  @ManyToOne(() => User, (user) => user.habits)
  @JoinColumn({ name: "userId" })
  user: User;

  // Create and Update Date Columns
  @CreateDateColumn({ type: "timestamp" })
  public createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updatedAt!: Date;
}
