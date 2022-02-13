const { fetch, fetchAll } = require('../../lib/postgres')

const USER = `
    SELECT 
        *
    FROM
        users
    WHERE userid = $1
`



const user = (id) => fetch(USER, id)

module.exports = {
    user
}