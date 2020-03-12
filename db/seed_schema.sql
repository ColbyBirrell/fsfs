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


{
	"user_id": 3,
	"prod_name": "Horses",
	"price": 9999.99,
	"prod_description": "They are horses, they are good, they are for sale",
	"prod_img": "this is a test img"
}

SELECT * FROM products

-- DELETE FROM products
-- WHERE prod_id IN (21)