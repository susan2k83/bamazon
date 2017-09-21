CREATE DATABASE bamazon2_db;

USE bamazon2_db;

CREATE TABLE bamazon2(
id INTEGER(10)AUTO_INCREMENT,
product_name VARCHAR(30),
department_name VARCHAR(30),
price INTEGER(10),
stock INTEGER(10),
PRIMARY KEY(id)
);
 
 SELECT * FROM bamazon2;
 
 INSERT INTO bamazon2(product_name, department_name, price, stock)
 VALUES ("Beach Chair", "Seasonal", "15.00", "20");
 
 