var express = require('express'),
	favicon = require('serve-favicon');

var app = express();
var port = process.env.PORT || 8000;

app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.renderFile(__dirname + '/public/index.html');
});

app.listen(port, function() {
      console.log('App running on port: ' + port);
});

