const {allMenu, allMenuList} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const menu = await allMenuList()
            res.send(menu)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const sub_category_id = Number(req.body.sub_category_id)
            const menu = await allMenu(sub_category_id)
            res.send(menu)
        } catch(err) {
            console.log(err.message)
        }
    }
}