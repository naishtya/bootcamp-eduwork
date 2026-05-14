-- =====================================
-- CREATE DATABASE
-- =====================================

CREATE DATABASE ecommerce_db;

USE ecommerce_db;

-- =====================================
-- CREATE TABLE USERS
-- =====================================

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

-- =====================================
-- CREATE TABLE PRODUCTS
-- =====================================

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_produk VARCHAR(100),
    harga INT,
    stok INT
);

-- =====================================
-- CREATE TABLE ORDERS
-- =====================================

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT,
    total INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- =====================================
-- INSERT USERS
-- =====================================

INSERT INTO users (nama, email, password)
VALUES
('Naima', 'naima@gmail.com', 'naima123'),
('Sahitya', 'sahitya@gmail.com', 'sahitya123'),
('Andini', 'andini@gmail.com', 'andini123'),
('Andini', 'andini@gmail.com', 'andini123'),
('Anan', 'anan@gmail,com', 'anan123'),
('Naya', 'naya@gmail.com', 'naya123'),
('Diah', 'diah@gmail.com', 'diah123'),
('Aca', 'aca@gmail.com', 'aca123');

-- =====================================
-- INSERT PRODUCTS
-- =====================================

INSERT INTO products (nama_produk, harga, deskripsi, stok)
VALUES
(
    'Mouse Gaming',
    150000,
    'Mouse RGB wireless',
    20
),
(
    'Keyboard Mechanical',
    350000,
    'Keyboard gaming RGB',
    15
),
(
    'Headset Gaming',
    500000,
    'Headset surround sound',
    10
),
(
    'Monitor 24 Inch',
    2200000,
    'Monitor Full HD 144Hz',
    8
),
(
    'Webcam HD',
    275000,
    'Webcam untuk streaming',
    12
);

-- =====================================
-- INSERT ORDERS
-- =====================================

INSERT INTO orders (user_id, product_id, quantity, total)
VALUES
(1, 1, 1, 150000),
(2, 2, 2, 700000),
(3, 3, 3, 500000),
(4, 4, 1, 26000000),
(5, 3, 2, 1000000),
(6, 1, 1, 150000),
(7, 2, 1, 350000);

-- =====================================
-- READ
-- =====================================

SELECT * FROM users;
SELECT * FROM products;
SELECT * FROM orders;

-- =====================================
-- UPDATE
-- =====================================

UPDATE products
SET harga = 26000000,
    stok = 6
WHERE id = 4;

-- =====================================
-- DELETE
-- =====================================

DELETE FROM products
WHERE id = 5;

-- =====================================
-- JOIN QUERY
-- =====================================

SELECT 
    orders.order_id,
    users.nama,
    products.nama_produk,
    orders.quantity,
    orders.total
FROM orders
JOIN users ON orders.user_id = users.id
JOIN products ON orders.product_id = products.id;