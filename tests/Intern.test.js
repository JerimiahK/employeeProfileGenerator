const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Checks that intern role method is working", () => {
    const intern = new Intern("Jeff", "1235", "jeff@gmail.com", "1234");
    expect(intern.getRole()).toEqual("Intern");
  });
});
