const { fetch, fetchAll } = require('../../lib/postgres')

const SUB_CATEGORIES_ONE = `
    SELECT
        *
    FROM
        sub_categories
    WHERE
        sub_category_id = $1
`

const SUB_CATEGORIES = `
    SELECT
        *
    FROM
        sub_categories
    WHERE
        category_id = $1
`

const DEL_SUB_CATEGORIES = `
    DELETE FROM sub_categories WHERE sub_category_id = $1
`




const subCategoriesOne = (ID) => fetchAll(SUB_CATEGORIES_ONE, ID)
const subCategories = (ID) => fetchAll(SUB_CATEGORIES, ID)
const delSubCategories = (ID) => fetchAll(DEL_SUB_CATEGORIES, ID)


module.exports = {
    subCategoriesOne,
    subCategories,
    delSubCategories
}