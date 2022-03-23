var express = require ('express'); // importamos la dependencia
var  app = express(); //declaramos una app de express

var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

//primera ruta (está al nivel de la raíz /), Hello world!
app.get('/', function (req, res) {
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
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
