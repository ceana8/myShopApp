import express from 'express'
//const req = require('express/lib/request')
//const res = require('express/lib/response')
import products from './data/prd.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express()
dotenv.config()
connectDB()

app.get('/', (req, res) =>{
    res.json({'msg': 'Hello World'})
})

app.get('/api/products', (req, res) => {
    res.json(products)
  })

app.get('/api/products/:id',(req, res) =>{
   const product = products.find((p)=> p._id === req.params.id);
   res.json(product);

})
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`));