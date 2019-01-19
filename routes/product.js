const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

//Create Product
router.post('/new',(req, res)=>{
  Product.create(req.body)
    .then(product => {
      return res.json(product)

    }).catch(error=>{
      console.log(error)
      res.render('product/form',{product:req.body,error})
    })
})
//Get all Products
router.get('/products',(req,res,next)=>{
  Product.find()
      .then(response => res.json(response))
      .catch(e => res.json(e))
})



module.exports = router