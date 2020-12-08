USE employeeDB

INSERT INTO department (dep_name)
VALUES("Management");

INSERT INTO department (dep_name)
VALUES("Human Resources");

INSERT INTO department (dep_name)
VALUES("Sales");

INSERT INTO department (dep_name)
VALUES("Product Development");


INSERT INTO role (title, salary, department_id)
VALUES ("General Manager", "80000", 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Developer", "70000", 2);

INSERT INTO role (title, salary, department_id)
VALUES ("HR Manager", "60000", 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", "40000", 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Developer", "80000", 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Bob", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Bill", 2, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joel", "Bob", 3, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Joel", 4, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Miss", "Henry", 5, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sally", "Bob", 5, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eve", "Bob", 5, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Bob", 4, 1);