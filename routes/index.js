const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.index);
router.get('/detalhe/:id', indexController.detalhe);

module.exports = router;
