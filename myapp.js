var express = require('express');
var app = express();

var rutas = require('./Multiplicar/rutas.js');

app.use('/multiplicar', rutas);

    // app.get('/', function (req, res) {
    // res.send('Hello World!');
    // });

    // app.post('/', function (req,res){
    // res.send('Got a POST request');
    // });

    // app.put('/user', function (req, res) {
    // res.send('Got a PUT request at /user');
    // });

    // app.delete('/user', function (req, res) {
    // res.send('Got a DELETE request at /user');
    // });

app.listen(4000, function () {
console.log('Example app listening on port 4000!');
});