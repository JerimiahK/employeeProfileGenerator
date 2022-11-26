const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const fs = require("fs")
const inquirer = require("inquirer");
const path = require("path");

const generateManager = ({ name, id, email, role, officeNumber }) =>
  `</div>
    <div class="card" style="width: 18rem;">
        <div class="card-header">${name}\n ${role}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${id}</li>
            <li class="list-group-item">${email}</li>
            <li class="list-group-item">${officeNumber}</li>
        </ul>
    </div>`;

const generateEngineer = ({ name, id, email, role, github }) =>
  `<div class="card" style="width: 18rem;">
        <div class="card-header">${name}\n ${role}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${id}</li>
            <li class="list-group-item">${email}</li>
            <li class="list-group-item">${github}</li>
        </ul>
    </div>`;

const generateIntern = ({ name, id, email, role, school }) =>
  `<div class="card" style="width: 18rem;">
        <div class="card-header">${name}\n ${role}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${id}</li>
            <li class="list-group-item">${email}</li>
            <li class="list-group-item">${school}</li>
        </ul>
    </div>`;

class Team {
  constructor() {
    this.teamMember = [];
  }

  buildTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "employee",
          message: "What type of employee would you like to add?",
          choices: ["Manager", "Engineer", "Intern"],
        },
      ])
      .then((answer) => {
        console.log(answer.employee);
        if (answer.employee === "Engineer") {
          this.addEngineer();
        } else if (answer.employee === "Intern") {
          this.addIntern();
        } else {
          this.addManager();
        }
      });
  }

  addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the employee name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the employees id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the employees email address?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the managers office number?",
        },
      ])
      .then((manager) => {
        this.teamMember.push(new Manager(manager));
        console.log("New Manager card has successfully been created!");
        this.newEmployee();
      });
  }

  addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the employee name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the employees id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the employees email address?",
        },
        {
          type: "input",
          name: "github",
          message: "What is this engineers GitHub username?",
        },
      ])
      .then((engineer) => {
        this.teamMember.push(new Engineer(engineer));
        console.log("New Engineer card has successfully been created!");
        this.newEmployee();
      });
  }

  addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the employee name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the employees id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the employees email address?",
        },
        {
          type: "input",
          name: "school",
          message: "Where did this intern attend school?",
        },
      ])
      .then((intern) => {
        this.teamMember.push(new Intern(intern));
        console.log("New Intern card has successfully been created!");
        this.newEmployee();
      });
  }

  newEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "employee",
          message: "What type of employee would you like to add?",
          choices: ["Engineer", "Intern", "Manager", "None, I'm Finished"],
        },
      ])
      .then((answer) => {
        if (answer.employee === "Engineer") {
          this.addEngineer();
        } else if (answer.employee === "Intern") {
          this.addIntern();
        } else if (answer.employee === "Manager") {
          this.addManager();
        } else {
          this.createPage(this.teamMember);
        }
      });
  }

  createPage(passedArray) {
    fs.writeFileSync(path.join("index.html"), )
  }
}

module.exports = Team;
