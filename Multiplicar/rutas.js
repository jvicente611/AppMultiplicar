var express = require('express');
var router = express.Router();

var multiplicarCtrl = require('./controlador.js')


router.get('/', multiplicarCtrl.multiplicar);

module.exports = router;