import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Salary } from "./Salary";

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => Salary)
  salary?: Salary | null;
}
