const express = require('express');
const router = express.Router();
const cartControllers = require('../controllers/cartControllers.js');

router.get('/', cartControllers.index);

module.exports = router;