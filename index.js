var express =  require('express');

app.set('port', (process.env.PORT || 5000));
var app = express();
app.get('/', function(req,res) {
	 res.sendFile('index.html', {root: __dirname })
});

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})