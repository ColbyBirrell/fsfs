UPDATE products
SET (
user_id = ${user_id},
prod_name = ${prod_name},
price = ${price},
prod_description = ${prod_description},
prod_img = ${prod_img})

WHERE prod_id = ${prod_id};
 
