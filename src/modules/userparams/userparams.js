const model = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const {id} = req.params
            let user = await model.user(id)
            res.send(user)
        } catch(err) {
            console.log(err.message)
        }
    }
}