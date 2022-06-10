const express = require('express');
const router = express.Router(); // express retorna um router
const userController = require('./controllers/userController.js')

// render página html home
router.get('/', userController.home); 
// post request do formulário de cadastro da home page
router.post('/register', userController.register); 


module.exports = router