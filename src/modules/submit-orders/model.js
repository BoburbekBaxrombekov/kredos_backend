const { fetch, fetchAll } = require('../../lib/postgres')

const SUB_ORDERS = `
    UPDATE orders
    SET isconfirmed = true
    WHERE orderid = $1
`

const editorders = (id) => fetch(SUB_ORDERS, id)


module.exports = {
    editorders
}