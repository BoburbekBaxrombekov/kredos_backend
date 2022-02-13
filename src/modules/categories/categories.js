const {allCategories, newCategory, delCategory} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const categories = await allCategories()
            res.send(categories)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const new_category = await newCategory(req.body.categoryName, req.body.categoryBg)
            res.sendStatus(200)
        } catch(err) {
            console.log(err.message)
        }
    },
    DELETE: async(req, res) => {
        try {
            const del_category = await delCategory(req.body.categoryId)
            res.send(200)
        } catch(err) {
            console.log(err.message)
        }
    }
}