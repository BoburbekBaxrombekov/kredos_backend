const { fetch, fetchAll } = require('../../lib/postgres')

const ORDERS = `
    SELECT 
        *
    FROM
        order_list
    WHERE
        user_id = $1
`


const orders = (id) => fetchAll(ORDERS, id)

module.exports = {
    orders
}