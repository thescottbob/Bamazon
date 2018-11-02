// Install and require necessary NPM packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// Create a connection to MySQL (whenever this variable is used)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_DB"
});

// Declare a function controlling what will happen after connecting to MySQL
function afterConnection() {
  console.log("Gotcha!");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
  })
}

// First connection to MySQL
connection.connect(function(err, res) {
  if (err) throw err;
  afterConnection();
})

// Stores the stock_quantity of the selected item from MySQL
function stockQuantity(){
    connection.query("SELECT stock_quantity FROM products WHERE item_id", function(err, res) {
      if (err) throw err;
    })
}

// Declare a function which will allow the user to make another purchase
function nextPurchase(){
  inquirer
    .prompt([
      {
        name: "next_item",
        type: "list",
        message: "Would you like to purchase another item?",
        choices: ["Yes", "No"]
      }
    ])
  }

function beginOrder() {
    // Prompt user for info about the first item they wish to purchase
    console.log("beginOrder");
    inquirer
      .prompt([
        {
          type: "input",
          name: "item_id",
          message: "What's the ID of the item you'd like to purchase?"
        }
        // ,
        // {  
        //   name: "purchase_quantity",
        //   type: "input",
        //   message: "How many units of this item would you like to purchase?"
        // }
      ])
      .then(function(val) {
        console.log("val");
      })
    }

function completeOrder(){
  console.log("completeOrder");
  beginOrder().then(function(response) {
    console.log("begin");
    console.log(response);
    var orderQuantity = response.message;
    if (orderQuantity <= stockQuantity) { 
        console.log("Congratulations! Your purchase has been completed.");
        stockQuantity += (orderQuantity * -1);

    // Allow the user to make another purchase
    nextPurchase().then(function(response) {
        if (response.choice === "Yes") {
          completeOrder();
        }
        else {
          // connection.end();
        } 
      })
    }
    
    // If the user wants to buy more of an item than is currently in stock
    else {
        console.log("Sorry! We do not currently have enough of that item in stock.");
    completeOrder();
    }
  }
  )
}

completeOrder();
