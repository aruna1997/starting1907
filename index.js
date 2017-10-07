var express =  require('express');
var request = require('request');


app.set('port', (process.env.PORT || 5000));

var app = express();

app.get('/', function(req,res) {
	 res.sendFile('index.html', {root: __dirname })
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});