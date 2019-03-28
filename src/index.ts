import "reflect-metadata";
import { createConnection } from "typeorm";
import { Employee } from "./entity/Employee";
import { Salary } from "./entity/Salary";

createConnection()
  .then(async connection => {
    await connection.synchronize(true);
    const salary = new Salary();
    salary.amount = 120;
    const employee = Employee.create({
      salary
    });
    await employee.save();
    console.log("Saved a new employee with id: " + employee.id);

    console.log("Set salary to null and save");
    employee.salary = null;
    await employee.save();

    console.log("Get employee");
    await employee.reload();
    console.log(employee.salary);
    // Salary { amount: '120' }
  })
  .catch(error => console.log(error));
