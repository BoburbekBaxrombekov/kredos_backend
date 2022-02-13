const { fetch, fetchAll } = require('../../lib/postgres')

const MENU = `
    SELECT
        *
    FROM
        products
    WHERE
        sub_category_id = $1
`
const ALL_PRODUCTS = `
    SELECT
        *
    FROM
        products
`


const allMenu = (sub_category_id) => fetchAll(MENU, sub_category_id)
const allMenuList = () => fetchAll(ALL_PRODUCTS)

module.exports = {
    allMenu,
    allMenuList
}