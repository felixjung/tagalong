// Load modules and setup initialize variables
var express = require('express'),
    config = require('./config.js'),
    tagRouter = require('./server/routes/search.js'),
    app = express();

app.use('/search', tagRouter);

// startup everything
var port = 3001;
app.listen(port, function(){
  console.log("Express server listening on port " + port);
});
