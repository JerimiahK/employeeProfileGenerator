const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Checks that employee name method is working", () => {
    const employee = new Employee("Jeff");
    expect(employee.getName()).toEqual("Jeff");
  });

  it("Checks that employee id method is working", () => {
    const employee = new Employee("Jeff", "123456");
    expect(employee.getId()).toEqual("123456");
  });

  it("Checks that employee email method is working", () => {
    const employee = new Employee("Jeff", "123456", "jeff@gmail.com");
    expect(employee.getEmail()).toEqual("jeff@gmail.com");
  });
});
