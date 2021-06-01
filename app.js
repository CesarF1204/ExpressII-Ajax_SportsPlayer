const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const router = require("./routes");
const mysql = require("./config");

const app = express();
//body parser
app.use(bodyParser.urlencoded({extended: true}));
//views
app.use(express.static(__dirname + "/views"));
//css
app.use(express.static(__dirname + "/assets"));
//ejs
app.set('view engine', 'ejs');

//routes
app.use(router);

//port
const server = app.listen(8000, function() {
	console.log("listening on port 8000");
});