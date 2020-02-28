const employee = require("./employee");

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber; 

        if (!name) {
            throw new Error("Please enter employee's name.");
        }
        if (!email) {
            throw new Error("Please enter the employee's email")
        }

        if (!officeNumber) {
            throw new Error("Please enter an office number for the manager's office");
        }
    }

    
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }


}



module.exports = manager;