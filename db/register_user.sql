INSERT INTO users (
    email_address,
    password
) VALUES (
    ${email_address},
    ${hash}
)

returning user_id, email_address;