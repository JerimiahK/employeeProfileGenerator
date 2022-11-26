const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
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
        const employee = new Manager(
          manager.name,
          manager.role,
          manager.email,
          manager.school
        );
        const name = employee.getName();
        const role = employee.getRole();
        const email = employee.getEmail();
        const id = employee.getId();
        const officeNumber = employee.getOfficeNumber();
        const generateManager = `<div class="card" style="width: 18rem;">
        <div class="card-header">${manager.name}\n ${role}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID Number: ${manager.id}</li>
            <li class="list-group-item">
                <a href="mailto:${manager.email}">Email Address: ${manager.email}</a>
            </li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>`;
        this.teamMember.push(generateManager);
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
        const employee = new Engineer(
          engineer.name,
          engineer.role,
          engineer.email,
          engineer.school
        );
        const name = employee.getName();
        const role = employee.getRole();
        const email = employee.getEmail();
        const id = employee.getId();
        const github = employee.getGithub();
        const generateEngineer = `<div class="card" style="width: 18rem;">
        <div class="card-header">${engineer.name}\n ${role}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID Number: ${engineer.id}</li>
            <li class="list-group-item">
                <a href="mailto: ${engineer.email}">Email Address: ${engineer.email}</a>
            </li>
            <li class="list-group-item">
            <a href="https://github.com/${engineer.github}" target="_blank"> Github Link: ${engineer.github}
            </li>
        </ul>
        </div>`;
        this.teamMember.push(generateEngineer);
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
        const employee = new Intern(
          intern.name,
          intern.role,
          intern.email,
          intern.school
        );
        const name = employee.getName();
        const role = employee.getRole();
        const email = employee.getEmail();
        const id = employee.getId();
        const school = employee.getSchool();
        const generateIntern = `<div class="card" style="width: 18rem;">
        <div class="card-header">${intern.name}\n ${role}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID Number: ${intern.id}</li>
            <li class="list-group-item">
                <a href="mailto:${intern.email}">Email Address: ${intern.email}</a>
            </li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </div>`;
        this.teamMember.push(generateIntern);
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
    console.log(passedArray);
    const generateHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <!-- Header -->
    <div class="container-fluid text-center bg-dark d-flex justify-content-center" style="height: 140px;">
        <div class="d-flex justify-content-center align-items-center w-50 text-white">
        <header style="font-size: 300%;">TEAM PROFILES</header>
        </div>
    </div>
    <div class="container-fluid d-flex flex-row justify-content-around">
    ${passedArray}
    </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="../index.js"></script>
</body>
</html>`;
    fs.writeFile("index.html", generateHTML, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  }
}

module.exports = Team;
