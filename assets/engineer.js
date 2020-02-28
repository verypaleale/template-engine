const employee = require("./employee");

class engineer extends employee { 
  constructor(name, id, email, github) {
    super(name, id, email); 
    this.github = github; 

    
    if (!name) {
      throw new Error("Please enter employee's name.");
    }
    if (!email) {
      throw new Error("Please enter the employee's email")
    }
    if (!github) {
      throw new error("Please enter the engineer's GitHub username");
    }
  }

  getGithub() {
    return this.github;
  }
  
  getRole() {
    return "Engineer";
  }
}


module.exports = engineer;