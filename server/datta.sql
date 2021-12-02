CREATE DATABASE boutique_management;

use DATABASE boutique_management;

CREATE TABLE products (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    product_name varchar(255),
    details varchar(255),
    Sstatus BOOLEAN,
    price SMALLINT,
    photu varchar(255)
 );

CREATE TABLE users(
    u_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email varchar(255),
    paravli varchar(255)
);

CREATE TABLE cart(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id INT,
    p_id INT,
    quantity INT
);
