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
            viewEmployees();
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

function viewEmployees() {
connection.query("SELECT e.id, e.first_name, r.title, d.dep_name, r.salary, CONCAT (m.first_name, m.last_name) AS manager FROM employee e LEFT Join role r ON e.role_id = r.id LEFT JOIN department d ON d.id = r.department_id LEFT JOIN employee m ON m.id = e.manager_id", function(err, res){
if (err) throw err;

console.table(res)


})

}

