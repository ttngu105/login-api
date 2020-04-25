const mongoose = require('mongoose');
var date = new Date()
const userSchema = new mongoose.Schema({
  username: 
    {type: String,required:true}
  ,
  email: 
    {type: String,required: true}
  ,
  password: 
    {type: String,required: true}
  ,
  logedin:
    {type:Boolean}
},{timestamps:true});

  var User = mongoose.model('user',userSchema);

module.exports = User