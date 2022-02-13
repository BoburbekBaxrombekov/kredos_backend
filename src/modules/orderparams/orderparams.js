const model = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const {id} = req.params
            let orders = await model.orders(id)
            console.log(orders);
            res.send(orders)
        } catch(err) {
            console.log(err.message)
        }
    }
}