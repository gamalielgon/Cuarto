var express = require ('express'); // importamos la dependencia
var  app = express(); //declaramos una app de express

var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public')); 
//espesificamos a la aplicacion de express que el directorio virtual para el contenido
//estatico se llama assets y que ese nombre será mapeado a una carpeta fisica
//public que se encuentra en el directorio donde corre la app dirname
app.use('/', function (req, res, next) {
    console.log('Requiest Url:' + req.url);
    next();
});
//este codigo nos permite ver que url se estan usando en la terminal de comandos


//primera ruta (está al nivel de la raíz /), Hello world!
app.get('/', function (req, res) {
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
    <body><h1>Hello world!</h1></body></html>`);
});

//segunda ruta /api, regresa un objeto JSON
app.get('/api', function (req, res) {
    res.json({firstname: 'Jhon', lastname: 'Doe'});
});

//tercera ruta, recibe un parametro
//en esta ruta, se recibe un parametro especificado en la propia ruta
//este parametro es utilizado para regresar el nombre de una persona
app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person : ' + req.params.id + '</h1></body></html>');
});
app.listen(port); //levanta el server y ponerlo a la escucha
