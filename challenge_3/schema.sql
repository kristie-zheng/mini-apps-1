CREATE DATABASE IF NOT EXISTS userdata; 
USE userdata;

CREATE TABLE IF NOT EXISTS accountInfo(id INT AUTO_INCREMENT, firstName
VARCHAR(20) NOT NULL, email VARCHAR(30) NOT NULL, password VARCHAR(20) NOT NULL, PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS shippingInfo (id INT AUTO_INCREMENT, userId INT NOT NULL, address1 VARCHAR(30) NOT NULL,
address2 VARCHAR(30), city VARCHAR(30) NOT NULL, state CHAR(2) NOT NULL, zip INT NOT NULL, phoneNumber INT NOT NULL, PRIMARY KEY (id), FOREIGN KEY (userID) REFERENCES accountInfo(id)); 

CREATE TABLE IF NOT EXISTS paymentInfo (id INT AUTO_INCREMENT, userId INT NOT NULL, expirationDate INT NOT NULL, cvv INT NOT NULL, billZip INT NOT NULL, PRIMARY KEY (id), FOREIGN KEY (userID) REFERENCES accountInfo(id));

ALTER TABLE paymentInfo MODIFY COLUMN cardNumber BIGINT NOT NULL AFTER userId;