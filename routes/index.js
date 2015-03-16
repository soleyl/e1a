//specifying the root route, front "page"
//app.get('/',...);
exports.index = function(req, res) {
	//we can pass objects into the render machine...
	//this is a regular javascript object but it can be data
	//from a json file or a database
	res.render('default', {
		title: 'Home',
		classname: 'home',
		users: ['movies','tv-shows','sports']
	});	
}

//specifying another route, second "page"
//app.get('/database',..);
exports.database = function(req, res) {
	res.render('default', {
		title: 'Database',
		classname: 'database'
	});
}

