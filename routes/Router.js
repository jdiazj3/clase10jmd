const express = require('express');
const bodyParser = require('body-parser');

const estudianteRouter = express.Router();

estudianteRouter.use(bodyParser.json());

estudianteRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Este metodo retornará la lista de estudiantes');
})
.post((req, res, next) => {
    res.end('Se agregare el estudiante ' + req.body.name + ' que vive en : ' + req.body.address);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('el metodo PUT no es soportado en  /estudiantes');
})
.delete((req, res, next) => {
    res.end('Eliminando todos los estudiantes');
});

module.exports = estudianteRouter;