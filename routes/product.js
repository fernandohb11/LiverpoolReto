
const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

//Create Product
router.post('/new', (req, res) => {
console.log(req.body)
      Product.create(req.body)
      .then(product => {
        return res.json(product)
  
      }).catch(error=>{
        console.log(error)
       return res.json('product/form',{product:req.body,error})
      })
    })


//Get all Products
router.get('/products',(req,res,next)=>{
  Product.find()
      .then(response => res.json(response))
      .catch(e => res.json(e))
})

//Update Product
router.put('/products/:id',(req,res,next)=>{
  const {id} = req.params
  Product.findByIdAndUpdate(id,{$set: req.body})
      .then(response => res.json({message:"This product was updated"}))
      .catch(e=> res.json(e))
})

//Delete Product
router.delete('/products/:id',(req,res,next)=>{
  const {id} = req.params
  Product.findByIdAndRemove(id)
      .then(response => res.json({message: "Product deleted"}))
      .catch(e=> res.json(e))
})

module.exports = router