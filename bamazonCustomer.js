var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
  });
}

function prompts() {
    // Prompt user for info about the item they wish to purchase
    inquirer
      .prompt([
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
      ])
    };

    prompts();

    function checkout() {
        if(process.argv[0] >0 && process.argv[0] <11){

          function err() {
            if (err) throw err;
            console.log("You've come so far!");
            // Re-prompt the user for if they want to buy anything else
            // start();
          }
        };
      };

      checkout();

// If the user opts to not purchase anything:
    // connection.end();
