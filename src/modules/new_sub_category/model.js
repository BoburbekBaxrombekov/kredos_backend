const { fetch, fetchAll } = require('../../lib/postgres')

const NEW_SUB_CATEGORY = `
    INSERT INTO sub_categories(sub_category_name, sub_category_img, category_id) VALUES($1, $2, $3)`
const SUB_CATEGORY = `
    SELECT * FROM sub_categories`

const newSubCategory = (sub_category_name, sub_category_img, category_id) => fetchAll(NEW_SUB_CATEGORY, sub_category_name, sub_category_img, category_id)

const SubCategory = () => fetchAll(SUB_CATEGORY)

module.exports = {
    newSubCategory,
    SubCategory
}