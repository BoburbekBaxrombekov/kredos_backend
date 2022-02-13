const { fetch, fetchAll } = require('../../lib/postgres')

const CATEGORIES = `
    SELECT
        *
    FROM
        categories
`
const NEW_CATEGORY = `
    INSERT INTO categories(category_name, category_bg) VALUES ($1, $2)
`

const DEL_CATEGORY = `
    DELETE FROM categories WHERE category_id = $1
`


const allCategories = () => fetchAll(CATEGORIES)
const newCategory = (categoryName, categoryBg) => fetchAll(NEW_CATEGORY, categoryName, categoryBg)
const delCategory = (categoryId) => fetchAll(DEL_CATEGORY, categoryId)

module.exports = {
    allCategories,
    newCategory,
    delCategory
}