const { fetch, fetchAll } = require('../../lib/postgres')

const CHECK_USER = `
    SELECT * FROM users WHERE userName = $1 AND userPassword = $2
`

const checkUser = (userName, userPassword) => fetch(
    CHECK_USER, 
    userName,
    userPassword
)

module.exports = {
    checkUser
}