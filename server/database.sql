CREATE DATABASE inventory;
\c inventory;
CREATE TABLE items(
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    amount INTEGER NOT NULL,
    price NUMERIC(10,2) NOT NULL
);