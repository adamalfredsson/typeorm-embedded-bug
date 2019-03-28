import { Column } from "typeorm";

export class Salary {
  @Column("decimal", { nullable: true })
  public amount: number;
}
