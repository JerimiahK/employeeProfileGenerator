const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school, name, id, email) {
    super(name, id, email, "Intern");
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
}

const intern1 = new Intern("DU Bootcamp", "Jeff", "12321234", "jeff@gmail.com");
console.log(intern1);

module.exports = Intern;
