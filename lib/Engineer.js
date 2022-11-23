const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github, name, id, email) {
        super(name, id, email, "Engineer");
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

const engineer1 = new Engineer("drunkDog", "Also Carl", "q34%2", "adsf@gmail.com");
console.log(engineer1)

module.exports = Engineer