-- Reset root password and create database
ALTER USER 'root'@'localhost' IDENTIFIED BY 'root_password';
ALTER USER 'root'@'127.0.0.1' IDENTIFIED BY 'root_password';

-- Create database
CREATE DATABASE IF NOT EXISTS prepzo_dev;

-- Create user
CREATE USER IF NOT EXISTS 'prepzo_user'@'localhost' IDENTIFIED BY 'prepzo_password';
CREATE USER IF NOT EXISTS 'prepzo_user'@'127.0.0.1' IDENTIFIED BY 'prepzo_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON prepzo_dev.* TO 'prepzo_user'@'localhost';
GRANT ALL PRIVILEGES ON prepzo_dev.* TO 'prepzo_user'@'127.0.0.1';

FLUSH PRIVILEGES;
