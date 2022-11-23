const Employee = require("./Employee");
const Engineer = require("./Engineer")
const Intern = require("./Intern");

class Manager extends Employee {
  constructor(officeNumber, name, id, email) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }
}

const manager1 = new Manager("1231234", "Carl", "321134", "carl@gmail.com");
console.log(manager1);
