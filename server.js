const express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(request, response, next) {
  if(request.headers['x-forwarded-proto'] === 'https') {
    response.redirect('http://' + request.hostname + request.url);
  } else {
    next();
  }
});

//Folder we wanna serve
app.use(express.static('public'));

//Start the server
app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});


// Install webpack
// sudo npm install -g webpack@1.12.13


