const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     name: String, 
     age: Number, 
     adress:String
 });
const user = mongoose.model('person', userSchema);
  module.exports =  user;
