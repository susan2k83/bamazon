var mysql = require("mysql");
var inquirer = require("inquirer");
require('console.table');

// Configuration.. Boiler Plate Code
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SR1024xo",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('connection successful!');
    afterCConnection();
});

function afterCConnection() {
    connection.query("SELECT * FROM " + )
}
function promptCustomer(res) {
    inquirer.prompt([{
        type: "input",
        name: "choice",
        message: "What is the id of the product you would like to purchase? [Quit with Q]"
    }]).then(function (answer) {
    // add some more things heir
    });
}