const express = require('express')
const products = require ('./data/prd')

const app = express()

app.get('/api/products', (req, res) =>{
    res.json(products)
})

app.listen(5000, console.log('Server is running on port 5000'))