const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers.js');

router.get('/', productsControllers.index);

module.exports = router;