CREATE TABLE users (
user_id serial primary key,
email_address VARCHAR(200),
password VARCHAR(300)
);

CREATE TABLE products(
prod_id SERIAL primary key,
created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
user_id INT REFERENCES users(user_id),
prod_name VARCHAR(200),
price Numeric,
prod_description VARCHAR(10000),
prod_img VARCHAR(2500)
);


