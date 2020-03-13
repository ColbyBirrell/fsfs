UPDATE products
SET (
prod_name = ${prod_name},
price = ${price},
prod_description = ${prod_description})

WHERE prod_id = ${prod_id};