const model = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const turns = await model.turns()
            res.json(turns)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const { userName, userPassword } = req.body
            const newUser = await model.newUser(userName, userPassword)
            res.json(newUser)
        } catch(err) {
            console.log(err.message)
        }
    }
}