class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName() {
    this.name;
    this.getId();
  }

  getId() {
    this.id;
    this.getEmail();
  }

  getEmail() {
    this.email;
    this.getRole();
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
