const mysql = require("mysql")
const inquirer = require("inquirer")

// establish mysql connection
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Scarface5.14a",

    database: "employeeDB"

})


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId)
    userPrompt();
});

// function that uses inquirer to ask the user what they want to do
function userPrompt() {

    console.log("prompt working")

    inquirer.prompt({
        type: "list",
        name: "userChoice",
        message: "What would you like to do?",
        choices: [
            "View Employees",
            "View Departments",
            "View Roles",
            "Add Employees",
            "Update your Employees",
            "Add a New Department",
            "Leave",
        ],

        // pass the user choice into an if else to decide what path they enter    
    }).then(function ({ userChoice }) {

        if (userChoice === "View Employees") {
            viewEmployees();
        }
        else if (userChoice === "View Departments") {
            viewDepartments();
        }
        else if (userChoice === "View Roles") {
            viewRoles();
        }
        else if (userChoice === "Add Employees") {
            addEmployee();
        }
        else if (userChoice === "Update your Employees") {
            updateEmployees();
        }
        else if (userChoice === "Add a New Department") {
            addDepartment();
        }
        else {
            connection.end();
        }

    })
}

//function that calls all DB data in a table form
function viewEmployees() {

    connection.query("SELECT e.id, e.first_name, r.title, d.dep_name, r.salary, CONCAT (m.first_name, m.last_name) AS manager FROM employee e LEFT Join role r ON e.role_id = r.id LEFT JOIN department d ON d.id = r.department_id LEFT JOIN employee m ON m.id = e.manager_id", function (err, res) {
        if (err) throw err;

        console.table(res)
        userPrompt();
    })
}

//function that just calls department table
function viewDepartments() {

    connection.query("SELECT * from department", function (err, res) {
        if (err) throw err;

        console.table(res);
        userPrompt();
    })
}

//function that call roles data
function viewRoles() {

    connection.query("SELECT * from role", function (err, res) {
        if (err) throw err;

        console.table(res);
        userPrompt();
    })
}

// function to add new employee to the database
function addEmployee() {

    // create object for the new employee
    let newEmployee = [
        {
            type: "input",
            message: "What is your new Employee's first name?",
            name: "first_name",
        },
        {
            type: "input",
            message: "What is your new Employee's last name?",
            name: "last_name",
        },
        {
            type: "input",
            message: "What is your new Employee's role ID?",
            name: "role_id",
        },
        {
            type: "input",
            message: "What is your new Employee's manager's ID?",
            name: "manager_id",
        },
    ];

    //populate object with Inquirer questions
    inquirer.prompt(newEmployee).then(function (answer) {
        const query = `INSERT INTO employee SET ?`;

        connection.query(
            query,
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.manager_id,
            },
            function (err) {
                if (err) throw err;

                viewEmployees();
                userPrompt();

            }
        )
    })
}

function updateEmployees() {

    inquirer.prompt([

        {
            type: "input",
            name: "employeeName",
            message: "Which employee would you like to update",
        },
        {
            type: "list",
            name: "newRole",
            message: "What is the Id of your employees new role?",
            choices: [
                "1",
                "2",
                "3",
                "4",
                "5",
            ]
        }
    ]).then(function (answer) {
        connection.query(
            "UPDATE employee SET role_id = ? Where first_name = ?",
            [answer.newRole, answer.employeeName],
            function (err, res) {
                if (err) throw err;
                viewEmployees();
                userPrompt();
            }
        );
    });
}

function addDepartment() {
    inquirer.prompt ([
        {
            type: "input",
            name: "newDepartment",
            message: "What is the name of your new department?"

        }
    ]).then(function (answer) {
        connection.query(
            "INSERT INTO department (dep_name) value (?)",
            [answer.newDepartment]
        )
        viewDepartments();
    })

}

