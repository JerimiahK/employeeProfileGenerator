const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Checks that intern role method is working", () => {
    const manager = new Manager("Jeff", "1235", "jeff@gmail.com", "1234");
    expect(manager.getRole()).toEqual("Manager");
  });
});
