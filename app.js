const mysql = require("mysql")
const inquirer = require("inquirer")

var connection = mysql.createConnection({

port: 3306,

user: "root",

password: "Scarface5.14a",

database: "employeeDB"

})


connection.connect(function(err) {
if (err) throw err;
console.log("connected as id " + connection.threadId)



})