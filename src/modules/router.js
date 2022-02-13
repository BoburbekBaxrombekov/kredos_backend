const { Router } = require('express')
const Users = require('./users/users')
// const Directions = require('./directions/directions')
const Orders = require('./orders/orders')
const Home = require('./home/home')
const Login = require('./login/login')
const Submit_Orders = require('./submit-orders/submit-orders')
const Orderparams = require('./orderparams/orderparams')
const Userparams = require('./userparams/userparams')
const Categories = require('./categories/categories')
const SubCategories = require('./sub_categories/sub_category')
const NewSubCategories = require('./new_sub_category/new_sub_category')
const Menu = require('./products/products')
const NewMenu = require('./products/products')

const router = new Router()
router
    .get('/', Home.GET)
    .get('/users', Users.GET)
    .get('/users/:id', Userparams.GET)
    .post('/users', Users.POST)
    .post('/login', Login.POST)
    // .get('/directions', Directions.GET)
    .get('/orders', Orders.GET)
    .post('/orders', Orders.POST)
    .get('/orders/:id', Orderparams.GET)
    .get('/categories', Categories.GET)
    .post('/categories', Categories.POST)
    .delete('/categories', Categories.DELETE)
    .post('/sub_categories', SubCategories.POST)
    .delete('/del_sub_categories', SubCategories.DELETE)
    .get('/new_sub_categories', NewSubCategories.GET)
    .post('/new_sub_categories', NewSubCategories.POST)
    .get('/sub_categories/:id', SubCategories.GET)
    .get('/products', Menu.GET)
    .post('/menu', Menu.POST)
    .post('/new_menu', NewMenu.POST)
    // .delete('/del_menu', NewMenu.DELETE)
    .post('/submit-orders', Submit_Orders.POST)
    .get('/time', (req, res) => {
        res.send(moment().format('l'))
    })

module.exports = router