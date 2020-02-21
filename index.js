const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const axios = require('axios');

const writeFileSync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?"
        },
        {
            type: "input", // !UPDATE SO THE ID# HAS TO BE A POSITIVE INTEGER > 0
            name: "managerID",
            message: "What is your manager's id?"
        },
        {
            type: "input", // !UPDATE SO THE EMAIL HAS TO HAVE @GMAIL.COM
            name: "managerEmail",
            message: "What is your manager's email?"
        },
        {
            type: "input", // !UPDATE SO THE OFFICE NUMBER HAS TO BE A POSITIVE INTEGER > 0
            name: "managerOffice",
            message: "What is your manager's office number?"
        },
        {
            type: "list",
            name: "initialChoice",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more"]
        }
    ])
}