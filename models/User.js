const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name:String,
  role:{
    type:String,
  }
},{
  timestamps:{
    updatedAt:'updated_at',
    createdAt:'created_at'
  }
})

module.exports = mongoose.model('User', UserSchema)