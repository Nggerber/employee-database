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
            " Updater your Employees",
            "Add a new Role",
            "Leave"
        ]
    })



}
