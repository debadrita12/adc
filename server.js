var express = require('express');
var path = require('path');
var app = express();
const port = 3000;

app.get('/home', (request,response) => {
	console.log('the root URL is called');
	response.sendFile(
		path.join(
			__dirname + '/template/index.html'
		)
	);
});

app.get('/login', (request,response) => {
	console.log('the root URL is called');
	response.sendFile(
		path.join(
			__dirname + '/template/login.html'
		)
	);
});

app.get('/signup', (request,response) => {
	console.log('the root URL is called');
	response.sendFile(
		path.join(
			__dirname + '/template/signup.html'
		)
	);
});

app.get('/paymentform', (request,response) => {
	console.log('the root URL is called');
	response.sendFile(
		path.join(
			__dirname + '/template/paymentform.html'
		)
	);
});
app.get('/registration', (request,response) => {
	console.log('the root URL is called');
	response.sendFile(
		path.join(
			__dirname + '/template/registration.html'
		)
	);
});

app.get('/student_details', (request,response) => {
	console.log('the root URL is called');
	response.sendFile(
		path.join(
			__dirname + '/template/student_details.html'
		)
	);
});

app.get('/style/:filename',(request,response) => {
	const filename = request.params.filename;
	console.log(filename);
	response.sendFile(
	 path.join(
	 	__dirname + '/style/' + filename
	 )
	);
});

app.get('/script/:filename',(request,response) => {
	const filename = request.params.filename;
	console.log(filename);
	response.sendFile(
	 path.join(
	 	__dirname + '/script/' + filename
	 )
	);
});
app.listen(port,(request,response)=> {
	console.log('listing on port ' + port);
});