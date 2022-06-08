const express = require('express');
const router = express.Router(); // express retorna um router

router.get('/', function(req, res){
   res.render('home-guest');
})

module.exports = router