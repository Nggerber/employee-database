const mysql = require("mysql")
const inquirer = require("inquirer")

var connection = mysql.createConnection({
host: "localhost",

port: 3306,

user: "root",

password: "Scarface5.14a",

database: "employeeDB"

})


connection.connect(function(err) {
if (err) throw err;
console.log("connected as id " + connection.threadId)
userPrompt();
});

function userPrompt() {

    console.log("prompt working")

    inquirer.prompt ({
        type: "list",
        name: "userChoice",
        message: "What would you like to do?",
        choices: [
            "View Employees",
            "View Departments",
            "View Roles",
            "Add Employees",
            "Update your Employees",
            "Add a New Role",
            "Leave",
        ],

    }).then(function ({ userChoice }) {

        if (userChoice === "View Employees") {
            
        }
        else if (userChoice === "View Departments") {

        }
        else if (userChoice === "View Roles") {

        }
        else if (userChoice === "Add Employees") {

        }
        else if (userChoice === "Update your Employees") {

        }
        else if (userChoice === "Add a New Role") {

        }
        else {
            connection.end();
        }

    })
}

