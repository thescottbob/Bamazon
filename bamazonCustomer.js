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
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
  });
}

// First connection to MySQL
connection.connect(function(err, res) {
  if (err) throw err;
  afterConnection();
});

function completeOrder() {
  // Prompt user for info about the first item they wish to purchase
  inquirer
    .prompt([
      {
        name: "item_id",
        type: "input",
        message: "What's the ID of the item you'd like to purchase?"
      }
    ])
    .then(function(inqResp) {
      var orderID = inqResp.orderID;
      // Selects the stock_quantity of the selected item from MySQL
      var stockQuantity = function() {
        connection.query(
          `SELECT stock_quantity FROM products WHERE item_id = ${orderID}`,
          function(err, res) {
            if (err) throw err;
            console.log(res);
          }
        );
      };
      console.log(orderID);
    });

  inquirer
    .prompt([
      {
        name: "purchase_quantity",
        type: "input",
        message: "How many units of this item would you like to purchase?"
      }
    ])
    .then(function(inq2Resp) {
      var orderQuantity = inq2Resp.orderQuantity;
      console.log(orderQuantity);
    });

  if (orderQuantity < stockQuantity || orderQuantity === stockQuantity) {
    console.log("Congratulations! Your purchase has been completed.");
    stockQuantity -= orderQuantity;

    // Allow the user to make another purchase
    inquirer.prompt([
      {
        name: "next_item",
        type: "confirm",
        message: "Would you like to purchase another item?",
        choices: ["Yes", "No"]
      }
    ]);

    if (choices === "Yes") {
      inquirer.prompt([
        {
          name: "item_id",
          type: "input",
          message: "What's the ID of the item you'd like to purchase?"
        },
        {
          name: "purchase_quantity",
          type: "input",
          message: "How many units of this item would you like to purchase?"
        }
      ]);
    } else {
      connection.end();
    }
  }

  // If the user wants to buy more of an item than is currently in stock
  else {
    console.log(
      "Sorry! We do not currently have enough of that item in stock."
    );
    // Allow the user to make another purchase
    inquirer.prompt([
      {
        name: "next_item",
        type: "list",
        message: "Would you like to purchase another item?",
        choices: ["Yes", "No"]
      }
    ]);

    if (choices === "Yes") {
      inquirer.prompt([
        {
          name: "item_id",
          type: "input",
          message: "What's the ID of the item you'd like to purchase?"
        },
        {
          name: "purchase_quantity",
          type: "input",
          message: "How many units of this item would you like to purchase?"
        }
      ]);
    } else {
      connection.end();
    }
  }
}

setTimeout(completeOrder, 1000);
