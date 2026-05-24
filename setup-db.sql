-- Create database and user for Prepzo
CREATE DATABASE IF NOT EXISTS prepzo_dev;

-- Create user if not exists
CREATE USER IF NOT EXISTS 'prepzo_user'@'localhost' IDENTIFIED BY 'prepzo_password';
CREATE USER IF NOT EXISTS 'prepzo_user'@'127.0.0.1' IDENTIFIED BY 'prepzo_password';

-- Grant all privileges
GRANT ALL PRIVILEGES ON prepzo_dev.* TO 'prepzo_user'@'localhost';
GRANT ALL PRIVILEGES ON prepzo_dev.* TO 'prepzo_user'@'127.0.0.1';

-- Flush privileges
FLUSH PRIVILEGES;

-- Verify
SELECT 'Database and user setup complete!' as status;
