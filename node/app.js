var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
//  res.send('Hello world-CI-CD');
   res.send('Hello world-CI-CD: <b><i>' + require('os').hostname() + '</i></b>');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
