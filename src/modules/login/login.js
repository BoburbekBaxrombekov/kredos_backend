const model = require('./model')
const jwt = require('jsonwebtoken')

module.exports = {
    POST: async(req, res) => {
        try {
            const { userName, userPassword } = req.body
            const checkUser = await model.checkUser(userName, userPassword)
            console.log(checkUser);
            if(checkUser){
                let token = checkUser.userid
                res.json(token)
            }else{
                res.send("401")
            }
        } catch(err) {
            console.log(err.message)
        }
    }
}