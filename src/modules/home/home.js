module.exports = {
    GET: async(req, res) => {
        try {
            res.redirect('http://localhost:3000/')
        } catch(err) {
            console.log(err.message)
        }
    }
}