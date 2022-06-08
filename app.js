const express = require('express');
const app = express();

// require -> executa um arquivo e tbm retorna oq o arquivo exporta
const router = require('./router.js');

// css files, browser base files, acessível por qualquer um q usa o app
app.use(express.static('public'));
// render o arquivo html da pasta views, express option views
app.set('views', 'views'); // 1ºviews configuration option 2ºnome da pasta 
// dizer ao express qual template engine/system vamos usar
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(process.env.PORT || 3000, function(){
   console.log("listening on:  %s  - in: %s", this.address(), app.settings.env);
})