var express = require('express');
var app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index', {
		title: 'MarkDown Parser'
	});
});

var server = app.listen(process.env.PORT || 3000, function() {
	console.log('Listening on port %d', server.address().port);
});
