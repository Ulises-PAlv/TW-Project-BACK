// ?? Routing
const action = require('../controller/actions.controller.js');
var router = require('express').Router();

// ** POST Usuario
router.post('/user', action.addUser);
// ** GET Usuario para LogIn
router.get('/userLogIn', action.validateLogIn);