var mysql = require("mysql");
var inquirer = require("inquirer");
require('console.table');

// Configuration.. Boiler Plate Code
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SR1024xo",
    database: "bamazon2_db"
});
var bamazon = "bamazon2";

connection.connect(function (err) {
    if (err) throw err;
    console.log('connection successful!');
    afterConnection();

});

function afterConnection() {
    connection.query("SELECT * FROM " + bamazon, function (err, res) {
        if (err) throw err;
        console.log(res);
        // create table
        promptCustomer();
    });
}
function promptCustomer(res) {
    inquirer.prompt([{
        type: "input",
        name: "choice",
        message: "What is the id of the product you would like to purchase?"
    }]).then(function(answer) {
            function getProductId(idNumber) {
                connection.query("SELECT * FROM bamazon WHERE ?", {id: idNumber}, function(err, res) {
                    if(err) throw err;
                    console.log(res);
                });
            }
    });

}
