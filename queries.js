const add_user = `
INSERT INTO users (username, email, contact, description)
VALUES ($1, $2, $3, $4) RETURNING *;
`;

module.exports={
    add_user
}