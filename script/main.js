app.get('/', (request,response) => {
	console.log('the root URL is called');
	response.sendFile(
		path.join(
			__dirname + '/assignment/index.html'
		)	
	);
});


app.get('/style/:filename', (request,response) => {
	const filename = request.params.filename;
	response.sendFile(
		path.join(
			__dirname + '/style/' + filename
			
		)
	);	
});


app.get('/script/:filename', (request,response) => {
	const filename = request.params.filename;
	response.sendFile(
		path.join(
			__dirname + '/script/' + filename
			
		)
	);	
});