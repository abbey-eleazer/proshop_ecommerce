 import express from 'express'
 import dotenv from 'dotenv'
 import colors from 'colors'
 dotenv.config()
 import products from './data/products.js'
 import db_connection from './config/db.js'

 db_connection()


 const port = process.env.PORT || 5000

 const app = express()

 app.get('/', (req, res) => {
  res.send('Api runing on port 5000')
 })

 app.get('/api/products', (req, res) => {
  res.json(products)
 })

 app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => 
    p._id === req.params.id
  )
    res.json(product)
 })

 app.listen(port, () => console.log('Server running ...'))