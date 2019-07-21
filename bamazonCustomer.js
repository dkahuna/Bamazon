// CREATING THE VARIABLE TO require 'mysql' after npm installing the package in a cleaner code
var mysql = require("mysql");
var inquirer = require("inquirer");


// NEXT IS TO MAKE THE CONNECTION WITH USING THE PACKAGE DOWNLOADED WITH 'mysql' and 'requirer
var connection = mysql.createConnection ({
    
    host: "localhost",
    user: "root",
    password: "chocolateMint",
    port: 3306,
    database: "bamazon"
});

// MAKING THE CONNECTION
connection.connect(function(err) {
    if (err) throw err;
    console.log("");
    console.log("");
    console.log("------------CONNECTED!!!----------------");
    console.log("");
    console.log("WELCOME TO BAMAZON!");
    console.log("____________________________");

   // AFTER MAKING THE CONNECTION, this is to  START THE uSER iNTERACTION 
   departments();
});

function departments () {

    inquirer
        .prompt ([
            {
                name: "action",
                type: "list",
                message: "Which department are you wanting to browse?",
                choices: ["Cosmetics", "Produce", "Home Goods", "Entertainment", "DVDs", "Fashion", "Gaming", "Cell Phones", "Books"]
            }
        ]).then (function (answer) {

            switch (answer.action) {

                case "Cosmetics":
                cosmeticsSearch();
                break;

                case "Produce":
                produceSearch();
                break;

                case "Home Goods":
                homeSearch();
                break;

                case "Entertainment":
                entertainmentSearch();
                break;

                case "DVDs":
                dvdSearch();
                break;

                case "Fashion":
                fashionSearch();
                break;

                case "Gaming":
                gamingSearch();
                break;

                case "Cell Phones":
                phoneSearch();
                break;

                case "Books":
                bookSearch();
                break;

                case "Exit":
                connection.end();    
            };
        });
        
};

// first switch case
function cosmeticsSearch() {
    var query = "SELECT * from products where?";
    connection.query(query, { department_name: "Cosmetics" }, function(err, data) {
      if(err) throw err;
      console.table(data);
      inquirer
        .prompt({
          name: "product_id",
          type: "input",
          message: "Using the id of the product, what are you looking for?"
        })
        .then(function(answer) {
            var query = "SELECT * from products where?";
            connection.query(query, { item_id: answer.product_id }, function(err, data) {
              if(err) throw err;
             var stock_quantity = data[0].stock_quantity;
             var price = data[0].price;
              var product_id = answer.product_id;      
              inquirer
                .prompt({
                  name: "quantity",
                  type: "input",
                  message: "How many do you need?"
              
                }) .then(function(answer) {
                    if(stock_quantity < answer.quantity) {
                        console.log("Insufficient Quantity!");
                        connection.end();
                    }else {
                        var query = "UPDATE products SET? WHERE?";
                        connection.query(query, [
                            {stock_quantity: stock_quantity - answer.quantity},
                             {item_id: product_id }
  
                          ], function(err, data) {
                              console.log("Thank you for your PURCHASE! Your total is $" + price * answer.quantity);
                              connection.end();
                          }
                          );
                    }
                });
              });
          });
    });
  }

  // second switch case
  function produceSearch() {
    var query = "SELECT * from products where?";
    connection.query(query, { department_name: "Produce" }, function(err, data) {
      if(err) throw err;
      console.table(data);
      inquirer
        .prompt({
          name: "product_id",
          type: "input",
          message: "Using the id of the product, what are you looking for?"
        })
        .then(function(answer) {
            var query = "SELECT * from products where?";
            connection.query(query, { item_id: answer.product_id }, function(err, data) {
              if(err) throw err;
             var stock_quantity = data[0].stock_quantity;
             var price = data[0].price;
              var product_id = answer.product_id;      
              inquirer
                .prompt({
                  name: "quantity",
                  type: "input",
                  message: "How many do you need?"
              
                }) .then(function(answer) {
                    if(stock_quantity < answer.quantity) {
                        console.log("Insufficient Quantity!");
                        connection.end();
                    }else {
                        var query = "UPDATE products SET? WHERE?";
                        connection.query(query, [
                            {stock_quantity: stock_quantity - answer.quantity},
                             {item_id: product_id }
  
                          ], function(err, data) {
                              console.log("Thank you for your PURCHASE! Your total is $" + price * answer.quantity);
                              connection.end();
                          }
                          );
                    }
                });
              });
          });
    });
  }

  // third switch case
  function homeSearch() {
    var query = "SELECT * from products where?";
    connection.query(query, { department_name: "Home Goods" }, function(err, data) {
      if(err) throw err;
      console.table(data);
      inquirer
        .prompt({
          name: "product_id",
          type: "input",
          message: "Using the id of the product, what are you looking for?"
        })
        .then(function(answer) {
            var query = "SELECT * from products where?";
            connection.query(query, { item_id: answer.product_id }, function(err, data) {
              if(err) throw err;
             var stock_quantity = data[0].stock_quantity;
             var price = data[0].price;
              var product_id = answer.product_id;      
              inquirer
                .prompt({
                  name: "quantity",
                  type: "input",
                  message: "How many do you need?"
              
                }) .then(function(answer) {
                    if(stock_quantity < answer.quantity) {
                        console.log("Insufficient Quantity!");
                        connection.end();
                    }else {
                        var query = "UPDATE products SET? WHERE?";
                        connection.query(query, [
                            {stock_quantity: stock_quantity - answer.quantity},
                             {item_id: product_id }
  
                          ], function(err, data) {
                              console.log("Thank you for your PURCHASE! Your total is $" + price * answer.quantity);
                              connection.end();
                          }
                          );
                    }
                });
              });
          });
    });
  }

  // fourth switch case
  function entertainmentSearch() {
    var query = "SELECT * from products where?";
    connection.query(query, { department_name: "Entertainment" }, function(err, data) {
      if(err) throw err;
      console.table(data);
      inquirer
        .prompt({
          name: "product_id",
          type: "input",
          message: "Using the id of the product, what are you looking for?"
        })
        .then(function(answer) {
            var query = "SELECT * from products where?";
            connection.query(query, { item_id: answer.product_id }, function(err, data) {
              if(err) throw err;
             var stock_quantity = data[0].stock_quantity;
             var price = data[0].price;
              var product_id = answer.product_id;      
              inquirer
                .prompt({
                  name: "quantity",
                  type: "input",
                  message: "How many do you need?"
              
                }) .then(function(answer) {
                    if(stock_quantity < answer.quantity) {
                        console.log("Insufficient Quantity!");
                        connection.end();
                    }else {
                        var query = "UPDATE products SET? WHERE?";
                        connection.query(query, [
                            {stock_quantity: stock_quantity - answer.quantity},
                             {item_id: product_id }
  
                          ], function(err, data) {
                              console.log("Thank you for your PURCHASE! Your total is $" + price * answer.quantity);
                              connection.end();
                          }
                          );
                    }
                });
              });
          });
    });
  }

  // fifth switch case
  function dvdSearch() {
    var query = "SELECT * from products where?";
    connection.query(query, { department_name: "DVDs" }, function(err, data) {
      if(err) throw err;
      console.table(data);
      inquirer
        .prompt({
          name: "product_id",
          type: "input",
          message: "Using the id of the product, what are you looking for?"
        })
        .then(function(answer) {
            var query = "SELECT * from products where?";
            connection.query(query, { item_id: answer.product_id }, function(err, data) {
              if(err) throw err;
             var stock_quantity = data[0].stock_quantity;
             var price = data[0].price;
              var product_id = answer.product_id;      
              inquirer
                .prompt({
                  name: "quantity",
                  type: "input",
                  message: "How many do you need?"
              
                }) .then(function(answer) {
                    if(stock_quantity < answer.quantity) {
                        console.log("Insufficient Quantity!");
                        connection.end();
                    }else {
                        var query = "UPDATE products SET? WHERE?";
                        connection.query(query, [
                            {stock_quantity: stock_quantity - answer.quantity},
                             {item_id: product_id }
  
                          ], function(err, data) {
                              console.log("Thank you for your PURCHASE! Your total is $" + price * answer.quantity);
                              connection.end();
                          }
                          );
                    }
                });
              });
          });
    });
  }

  // sixth switch case
  function fashionSearch() {
    var query = "SELECT * from products where?";
    connection.query(query, { department_name: "Fashion" }, function(err, data) {
      if(err) throw err;
      console.table(data);
      inquirer
        .prompt({
          name: "product_id",
          type: "input",
          message: "Using the id of the product, what are you looking for?"
        })
        .then(function(answer) {
            var query = "SELECT * from products where?";
            connection.query(query, { item_id: answer.product_id }, function(err, data) {
              if(err) throw err;
             var stock_quantity = data[0].stock_quantity;
             var price = data[0].price;
              var product_id = answer.product_id;      
              inquirer
                .prompt({
                  name: "quantity",
                  type: "input",
                  message: "How many do you need?"
              
                }) .then(function(answer) {
                    if(stock_quantity < answer.quantity) {
                        console.log("Insufficient Quantity!");
                        connection.end();
                    }else {
                        var query = "UPDATE products SET? WHERE?";
                        connection.query(query, [
                            {stock_quantity: stock_quantity - answer.quantity},
                             {item_id: product_id }
  
                          ], function(err, data) {
                              console.log("Thank you for your PURCHASE! Your total is $" + price * answer.quantity);
                              connection.end();
                          }
                          );
                    }
                });
              });
          });
    });
  }

  // seventh switch case
  function gamingSearch() {
    var query = "SELECT * from products where?";
    connection.query(query, { department_name: "Gaming" }, function(err, data) {
      if(err) throw err;
      console.table(data);
      inquirer
        .prompt({
          name: "product_id",
          type: "input",
          message: "Using the id of the product, what are you looking for?"
        })
        .then(function(answer) {
            var query = "SELECT * from products where?";
            connection.query(query, { item_id: answer.product_id }, function(err, data) {
              if(err) throw err;
             var stock_quantity = data[0].stock_quantity;
             var price = data[0].price;
              var product_id = answer.product_id;      
              inquirer
                .prompt({
                  name: "quantity",
                  type: "input",
                  message: "How many do you need?"
              
                }) .then(function(answer) {
                    if(stock_quantity < answer.quantity) {
                        console.log("Insufficient Quantity!");
                        connection.end();
                    }else {
                        var query = "UPDATE products SET? WHERE?";
                        connection.query(query, [
                            {stock_quantity: stock_quantity - answer.quantity},
                             {item_id: product_id }
  
                          ], function(err, data) {
                              console.log("Thank you for your PURCHASE! Your total is $" + price * answer.quantity);
                              connection.end();
                          }
                          );
                    }
                });
              });
          });
    });
  }

  // eighth switch case
  function phoneSearch() {
    var query = "SELECT * from products where?";
    connection.query(query, { department_name: "Cell Phones" }, function(err, data) {
      if(err) throw err;
      console.table(data);
      inquirer
        .prompt({
          name: "product_id",
          type: "input",
          message: "Using the id of the product, what are you looking for?"
        })
        .then(function(answer) {
            var query = "SELECT * from products where?";
            connection.query(query, { item_id: answer.product_id }, function(err, data) {
              if(err) throw err;
             var stock_quantity = data[0].stock_quantity;
             var price = data[0].price;
              var product_id = answer.product_id;      
              inquirer
                .prompt({
                  name: "quantity",
                  type: "input",
                  message: "How many do you need?"
              
                }) .then(function(answer) {
                    if(stock_quantity < answer.quantity) {
                        console.log("Insufficient Quantity!");
                        connection.end();
                    }else {
                        var query = "UPDATE products SET? WHERE?";
                        connection.query(query, [
                            {stock_quantity: stock_quantity - answer.quantity},
                             {item_id: product_id }
  
                          ], function(err, data) {
                              console.log("Thank you for your PURCHASE! Your total is $" + price * answer.quantity);
                              connection.end();
                          }
                          );
                    }
                });
              });
          });
    });
  }

  // ninth switch case
  function bookSearch() {
    var query = "SELECT * from products where?";
    connection.query(query, { department_name: "Books" }, function(err, data) {
      if(err) throw err;
      console.table(data);
      inquirer
        .prompt({
          name: "product_id",
          type: "input",
          message: "Using the id of the product, what are you looking for?"
        })
        .then(function(answer) {
            var query = "SELECT * from products where?";
            connection.query(query, { item_id: answer.product_id }, function(err, data) {
              if(err) throw err;
             var stock_quantity = data[0].stock_quantity;
             var price = data[0].price;
              var product_id = answer.product_id;      
              inquirer
                .prompt({
                  name: "quantity",
                  type: "input",
                  message: "How many do you need?"
              
                }) .then(function(answer) {
                    if(stock_quantity < answer.quantity) {
                        console.log("Insufficient Quantity!");
                        connection.end();
                    }else {
                        var query = "UPDATE products SET? WHERE?";
                        connection.query(query, [
                            {stock_quantity: stock_quantity - answer.quantity},
                             {item_id: product_id }
  
                          ], function(err, data) {
                              console.log("Thank you for your PURCHASE! Your total is $" + price * answer.quantity);
                              connection.end();
                          }
                          );
                    }
                });
              });
          });
    });
  }

