const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const router = require('./src/modules/router')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)


app.listen(PORT, console.log(PORT))