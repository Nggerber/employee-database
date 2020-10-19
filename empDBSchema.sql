DROP DATABASE IF EXISTS employeeDB

CREATE database employeeDB

USE employeeDB

CREATE TABLE department

(

    id INT NOT NULL AUTO_INCREMENT, 

    dep_name VARCHAR(30) NULL, 

    PRIMARY KEY (id) 

);

CREATE TABLE role (

    id INT NOT NULL AUTO_INCREMENT,

    title VARCHAR(30) NULL,

    salary DECIMAL(10.2) NULL,

    department_id INT NUll,

    PRIMARY KEY (id)

);

CREATE TABLE employee (

    id INT NOT NULL AUTO_INCREMENT,

    first_name VARCHAR(30) NULL,

    last_name VARCHAR(30) NULL,

    role_id INTEGER NULL,

    manager_id INTEGER NULL,

    PRIMARY KEY (id)



);