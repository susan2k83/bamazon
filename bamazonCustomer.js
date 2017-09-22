var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("cli-table");
// require('console.table');
require('cli-table');

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
        // create table  ..... the code below does not result in a table, just errors
        
        // console.log(table.toString());
        // for (var i = 0; i < res.length; i++) {
        //     table.push([res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock]);
        // }
        // console.log("................................");
        
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
                connection.query("SELECT * FROM bamazon  WHERE ?", {id: idNumber}, function(err, res) {
                    if(err) throw err;
                    console.log(res);
                    userInput();
                });
            }
    });
// the code stops running after the first prompt/message...and I included at least one more prompt/function userInput to see if it would continue through the next message, which it did not. 
    function userInput() {
        inquirer
            .prompt([
                {
                    name: "id",
                    type: "input",
                    message: "Please confirm the id of the item you would like to purchase. "
                    
                },
                
            ])
    }

}
