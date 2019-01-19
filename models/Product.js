const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: String,
  photoURL: String,
  price: String,
},{
  timestamps:{
    updatedAt:'updated_at',
    createdAt:'created_at'
  }
})

module.exports = mongoose.model('Product', productSchema)