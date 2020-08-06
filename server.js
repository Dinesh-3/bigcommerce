
const express = require('express'),
bodyParser = require('body-parser'),
app = express(),
productsRouter = require('./routes/products'),
ordersRouter = require('./routes/orders'),
customersRouter = require('./routes/customers')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.static('public'))
app.use('/',productsRouter)
app.use('/',ordersRouter)
app.use('/',customersRouter)


const PORT = 3000
app.listen(PORT,() => console.log(`Server is running on port : ${PORT}`))
