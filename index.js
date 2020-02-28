const Manager = require("./assets/manager");
const Engineer = require("./assets/engineer");
const Intern = require("./assets/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const ManagerHtml = require("./assets/temp/man");
const EngineerHtml = require("./assets/temp/eng");
const InternHtml = require("./assets/temp/int");
const teamHtml = require("./assets/temp/team");


let id = 1

let team = [];

const userManager = () => {
inquirer.prompt([{
    type: "input",
    name: "managerName",
    message: "What is your manager's name?"
},

{
    type: "input",
    name: "managerEmail",
    message: "What is your manager's email?"
},
{
    type: "input",
    name: "managerOfficeNumber",
    message: "What is your manager's office number?"
},

]).then(function (input) {


const manager = new Manager(input.managerName, id++, input.managerEmail, input.managerOfficeNumber);

team.push(manager);

console.log(team);
userQuestions(); 
});

}


 const userQuestions = () => {
    inquirer.prompt([{
        type: "list",
        name: "employeeType",
        message: "Please build your team",
        choices: ["Engineer", "Intern", "No More"] 
    }]).then(function (input) {

        switch (input.employeeType) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default: 
                generateHtml();
                break;
        }
    });
} 

const addIntern = () => {
    inquirer.prompt([{
            type: "input",
            name: "internName",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "college",
            message: "What college does your intern attend?"
        }
    ]).then(function (input) {
        const intern = new Intern(input.internName, id++, input.internEmail, input.college);
        team.push(intern);
        console.log(team);
        userQuestions();
    });
}

const addEngineer = () => {
    inquirer.prompt([{
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?"
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is your engineer's GitHub profile name?"
            }
        ])
        .then(function (input) {

            const engineer = new Engineer(input.engineerName, id++, input.engineerEmail, input.engineerGitHub);

            team.push(engineer);

            userQuestions();
        });
}

const generateHtml = () => { 
    let html = "";
 
    for (let i = 0; i < team.length; i++) {

        if (team[i].getRole() === "Manager") {
            html += ManagerHtml(team[i]);
        } else if (team[i].getRole() === "Engineer") {
            html += EngineerHtml(team[i]);
        } else if (team[i].getRole() === "Intern") {
            html += InternHtml(team[i]);
        }
    }
    fs.writeFile("./index.html", teamHtml(html), function (err) {
        if (err) {
            console.log(err);
        }
    })
}


userManager();