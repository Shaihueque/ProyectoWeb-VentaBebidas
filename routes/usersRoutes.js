const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers.js');

router.get('/login', usersControllers.login);

router.get('/register', usersControllers.register);

module.exports = router;