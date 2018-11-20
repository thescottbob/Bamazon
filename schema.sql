-- Drops the bamazon_DB if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the bamazon_db database --
CREATE DATABASE bamazon;

-- Make it so all of the following code will affect bamazon_DB --
USE bamazon;

CREATE TABLE products (
  -- Numeric column to display item id --
  item_id INT AUTO_INCREMENT NOT NULL,
  -- String column to display product name --
  product_name VARCHAR(45) NOT NULL,
  -- String column to display department name --
  department_name VARCHAR(45) NOT NULL,
  -- String column to display price --
  price DECIMAL(10,2) NOT NULL,
  -- Numeric column to display stock quantity --
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('10-Inch Lighter','Handheld Accessories', 2.99, 65),
       ('Lord of The Rings Chess Set','Games', 19.99, 10),
       ('Bottled Water (X12)','Food & Drinks', 2.49, 150),
       ('Coaster Set (X4)','Home Decor', 7.99, 60),
       ('Office Chair','Furniture', 29.99, 40),
       ('World Map','Artwork', 5.99, 30),
       ('Stripper Pole','Adult Entertainment', 49.99, 15),
       ('Hunger Games Trilogy (Hardback)','Books', 24.99, 35),
       ('Cards Against Humanity','Games', 11.99, 50),
       ('Windows intel Corei7 Laptop','Electronics', 599.99, 100);