var express = require('express');
var app = express();
app.use(express.static(__dirname +'/static'));

app.listen(5000);
console.log('port:5000');
