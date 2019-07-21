drop database if exists bamazon;

create database bamazon;

use bamazon;

create table products (
item_id integer not null auto_increment,
product_name varchar(45) null,
department_name varchar(35) null,
price decimal(10,2) null,
stock_quantity integer not null,
PRIMARY KEY (item_id)
);

SELECT * FROM products;

insert into products (product_name, department_name, price, stock_quantity)
values ("Super-Freeze Hair Spray", "Cosmetics", 29.99, 10);

insert into products (product_name, department_name, price, stock_quantity)
values ("Bananas", "Produce", 0.99, 9);

insert into products (product_name, department_name, price, stock_quantity)
values ("Fan", "Home Goods", 169.59, 5);

insert into products (product_name, department_name, price, stock_quantity)
values ("Candles", "Home Goods", 17.99, 42);

insert into products (product_name, department_name, price, stock_quantity)
values ("TV", "Entertainment", 799.99, 71);

insert into products (product_name, department_name, price, stock_quantity)
values ("Hot Rod", "DvDs", 4.99, 127);

insert into products (product_name, department_name, price, stock_quantity)
values ("Socks", "Fashion", 11.99, 87);

insert into products (product_name, department_name, price, stock_quantity)
values ("Nintendo Switch", "Gaming", 299.99, 4);

insert into products (product_name, department_name, price, stock_quantity)
values ("Apple IPhone XR", "Cell Phones", 899.99, 0);

insert into products (product_name, department_name, price, stock_quantity)
values ("The Plateau Effect", "Books", 9.99, 2);