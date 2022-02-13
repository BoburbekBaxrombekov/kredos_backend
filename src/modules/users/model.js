const { fetch, fetchAll } = require('../../lib/postgres')

const USERS = `
    SELECT 
        userId,
        userName,
        userPassword
    FROM
        users
    WHERE
        isAdmin = FALSE
`
const ADMINS = `
    SELECT 
        userId,
        userName,
        userPassword
    FROM
        users
    WHERE
        isAdmin = TRUE
`

const NEW_USER = `
    INSERT INTO 
        users(userName, userEmail, userPhone, userPassword)
    VALUES($1, $2, $3, $4)
    RETURNING *
`

const users = () => fetchAll(USERS)

const newUser = (userName, userEmail, userPhone, userPassword) => fetch(
    NEW_USER, 
    userName,
    userEmail,
    userPhone,
    userPassword
)

module.exports = {
    users,
    newUser
}