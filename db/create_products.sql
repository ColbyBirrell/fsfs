INSERT INTO products(
user_id INT REFERENCES users(user_id),
prod_name,
price,
prod_description,
prod_img
)
VALUES(
    ${user_id},
    ${prod_name},
    ${price},
    ${prod_description},
    ${prod_img}
);

returning * from products

