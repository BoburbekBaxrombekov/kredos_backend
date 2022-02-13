const model = require('./model')

module.exports = {
    POST: async(req, res) => {
        try {
            const { orderId } = req.body
            console.log(orderId);
            const editOrder = await model.editorders(orderId)
            res.sendStatus(200)
        } catch(err) {
            console.log(err.message)
        }
    }
}