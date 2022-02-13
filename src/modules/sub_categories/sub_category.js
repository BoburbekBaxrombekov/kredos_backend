const {subCategoriesOne,subCategories, delSubCategories} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const sub_category = req.params['id']
            console.log(sub_category);
            const sub_categories = await subCategoriesOne(sub_category)
            console.log(sub_categories);
            res.send(sub_categories)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const category_id = Number(req.body.category_id)
            const sub_categories = await subCategories(category_id)
            res.send(sub_categories)
        } catch(err) {
            console.log(err.message)
        }
    },
    DELETE: async(req, res) => {
        try {
            const sub_category_id = Number(req.body.sub_category_id)
            const del_sub_categories = await delSubCategories(sub_category_id)
            res.sendStatus(200)
        } catch(err) {
            console.log(err.message)
        }
    }
}