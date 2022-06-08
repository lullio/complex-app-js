const express = require('express');
const app = express();


// render o arquivo html da pasta views, express option views
app.set('views', 'views'); // 1ºviews configuration option 2ºnome da pasta 
// dizer ao express qual template engine/system vamos usar
app.set('view engine', 'ejs');

app.get('/', function(req, res){
   res.render('home-guest');
})

app.listen(process.env.PORT || 3000, function(){
   console.log("listening on:  %s  - in: %s", this.address(), app.settings.env);
})