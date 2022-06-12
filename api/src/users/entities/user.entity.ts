import { Habit } from "src/habits/entities/habit.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: "varchar", length: 120 })
  public name: string;

  @OneToMany(() => Habit, (habit) => habit.user)
  habits: Habit[];

  // Create and Update Date Columns
  @CreateDateColumn({ type: "timestamp" })
  public createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updatedAt!: Date;
}
