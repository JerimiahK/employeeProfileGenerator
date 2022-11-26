const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Checks that engineer name method is working", () => {
    const engineer = new Engineer("Jeff", "1235", "jeff@gmail.com", "1234");
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
