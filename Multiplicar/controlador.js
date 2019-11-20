exports.multiplicar = function(req, res) {
    const Respuesta = req.query.a * req.query.b;
    console.log(req.query);
    res.send(`${req.query.a} * ${req.query.b} = ${Respuesta}`);
};