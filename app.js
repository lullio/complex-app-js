const express = require('express');
const app = express()

app('/', function(req, res){
   res.send("welcome to our new app");
})

app.listen(process.env.PORT || 3000, function(){
   console.log("listening on:  %s  - in: %s", this.address(), app.settings.env);
})