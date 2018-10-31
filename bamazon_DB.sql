-- Drops the 'bamazon_DB' if it exists currently --
DROP DATABASE IF EXISTS bamazon_DB;
-- Creates the 'bamazon_db' database --
CREATE DATABASE bamazon_DB;

-- Make it so all of the following code will affect 'bamazon_DB' --
USE bamazon_DB;

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password' --


CREATE TABLE products (
  -- Numeric column to display item id --
  item_id INT NOT NULL,
  -- String column to display product name --
  product_name VARCHAR(40) NOT NULL,
  -- String column to display department name --
  department_name VARCHAR(30) NOT NULL,
  -- String column to display price --
  price VARCHAR(30) NOT NULL,
  -- Numeric column to display stock quantity --
  stock_quantity INT NOT NULL
);

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity)
VALUES (1,'10-Inch Lighter','Handheld Accessories','$2.99',65),
       (2,'Lord of The Rings Chess Set','Games','$19.99', 10),
       (3,'Bottled Water (X12)','Food & Drinks','$2.49', 150),
       (4,'Coaster Set (X4)','Home Decor','$7.99', 60),
       (5,'Office Chair','Furniture','$29.99',40),
       (6,'World Map','Artwork','$5.99',30),
       (7,'Stripper Pole','Adult Entertainment','$49.99',15),
       (8,'Hunger Games Trilogy (Hardback)','Books','$24.99',35),
       (9,'Cards Against Humanity','Games','$11.99',50),
       (10,'Windows intel Corei7 Laptop','Electronics','$599.99',25);





