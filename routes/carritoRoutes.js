const express = require('express');
const router = express.Router();
const carritoControllers = require('../controllers/carritoControllers.js');

router.get('/', carritoControllers.index);

module.exports = router;