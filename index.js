const express = require('express'),
     http = require('http');

const hostname = 'localhost';
const morgan = require('morgan');
const bodyParser = require('body-parser');
const estudianteRouter = require('./routes/Router');


const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


/*app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Mi servidor creado cno Express</h1></body></html>');

});*/


app.use(bodyParser.json());

app.all('/estudiantes', (req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.use('/estudiantes', estudianteRouter);

/*app.get('/estudiantes', (req,res,next) => {
    res.end('Este metodo retornara la lista de estudiantes');
});


app.post('/estudiantes', (req, res, next) => {
    console.dir(req.body );
    res.end('Se agregará el estudiante ' + req.body.name + ' que vive en : ' + req.body.address);
   });
   
   app.put('/estudiantes', (req, res, next) => {
     res.statusCode = 403;
     res.end('el metodo PUT no es soportado en  /estudiantes');
   });
    
   app.delete('/estudiantes', (req, res, next) => {
       res.end('Eliminando todos los estudiantes');
   });
*/

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});