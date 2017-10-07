var express =  require('express');

app.set('port', (process.env.PORT || 5000))
var app = express();
app.get('/', function(req,res) {
	 res.sendFile('index.html', {root: __dirname })
});