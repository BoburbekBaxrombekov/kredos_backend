const model = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const orders = await model.orders()
            res.json(orders)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const { order_products, order_data, order_time } = req.body
            await model.newOrder(order_products, order_data, order_time)
            res.sendStatus(200)
        } catch(err) {
            console.log(err.message)
        }
    }
}