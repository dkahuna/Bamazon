// CREATING THE VARIABLE TO require 'mysql' after npm installing the package in a cleaner code
var mysql = require("mysql");
var inquirer = require("inquirer");

// NEXT IS TO MAKE THE CONNECTION WITH USING THE PACKAGE DOWNLOADED WITH 'mysql' and 'requirer
var connection = mysql.createConnection ({
    
    host: "localhost",
    user: "root",
    password: "chocolateMint",
    port: 3306,
    database: "products"
});

// MAKING THE CONNECTION
connection.connect(function(err){

    if (err) throw err;
    console.log("You're now connected with Bamazon Products!")
});