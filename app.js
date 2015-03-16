var express = require('express');
var app = express();
var routes = require('./routes');

//adding the ejs embedded javascript
app.set('view engine', 'ejs');
//adding objects locally to every single page
app.locals.pagetitle = "Awesome Website";

app.get('/', routes.index);
app.get('/database', routes.database);

//here´s what happens when none of the routes match..
app.get('*', function(req, res) {
	res.send('Bad Route');
});

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});

