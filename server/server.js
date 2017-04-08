var express = require("express");
var path = require("path");

var app = express();
app.set('port', (process.env.PORT || 7777));

app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(app.get('port'),function(){
    console.log("Started listening on port", app.get('port'));
})
