const employee = require("./employee");

class intern extends employee {
    constructor(name, id, email, college) {
        super(name, id, email); 
        this.college = college; 
        
        if (!name) {
            throw new Error("Please enter employee's name.");
        }
        if (!email) {
            throw new Error("Please enter the employee's email")
        }
        if (!college) {
            throw new Error("Please enter the college the intern is attending.");
        }
    }

    getSchool() {
        return this.college;
    }
    
    getRole() {
        return "Intern";
    };

}


module.exports = intern;