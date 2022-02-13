const model = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const users = await model.users()
            res.json(users)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const { userName, userEmail, userPhone, userPassword } = req.body
            const newUser = await model.newUser(userName, userEmail, userPhone, userPassword)
            res.json(newUser)
        } catch(err) {
            console.log(err.message)
        }
    }
}