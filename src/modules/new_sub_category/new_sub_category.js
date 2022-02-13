const {newSubCategory, SubCategory} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const sub_categories = await SubCategory()
            res.send(sub_categories)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const sub_category_name = req.body.sub_category_name
            const sub_category_img = req.body.sub_category_img
            const category_id = Number(req.body.category_id)
            const sub_categories = await newSubCategory(sub_category_name, sub_category_img, category_id)
            res.sendStatus(200)
        } catch(err) {
            console.log(err.message)
        }
    }
}