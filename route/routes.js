var express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User")

const {test,login} = require('../controllers/login.controllers');
router.get('/test',test);
//console.log(date.getUTCDay(),date.getUTCDate(),date.getUTCMonth(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds());
const isUser = function (){ 
User.find({logedin:true},(error,users)=>{
		var user = users[0]
		if (user){
			router.get('/login',(request,response)=>{
			response.json({'success':true,
			'user': user.username})
			})
		}
		else{
			router.get('/login',(request,response)=>{
			response.json({'success':true,'user': "user does not exist"})})
	}
	user.logedin = false
	user.save()
	})
}
isUser()


module.exports = router; 
