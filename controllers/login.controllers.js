const game = require('../models/login.model')
const mongoose = require('mongoose');
class Controllers{
	test(request,response){
	response.json({'sucess':true})
	}
	login(request,response){
		console.log(request.body)
		const {username} = request.query;
		console.log(username);
		response.json({'success':true,'user':username})
	}
}

module.exports = new Controllers();