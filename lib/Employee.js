class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

const employee1 = new Employee("Jerimiah", "4352", "jk@gmail.com", "Employee");
console.log(employee1);
module.exports = Employee;
