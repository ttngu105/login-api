const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express();
const mongoose = require("mongoose")
const routes = require('./route/routes');
//db config
const url = require('./config/keys').MongoURI;
//connect to mongoDB
mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology: true })
//try to see if im an connected the database
mongoose.connection.on('connected', function(){console.log("MongoDB connected..................................")});
mongoose.connection.on('error', function(){console.log('i am not connected')});
mongoose.connection.on('disconnected', function(){console.log('i have disconnected')});
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api/',routes);
app.use(localhostHandler)
app.listen(port);
console.log(`server is listening on port ${port}.........`);
function localhostHandler(request,response,next){
	response.header('Access-Control-Allow-Orgin','*');
	next();
}
