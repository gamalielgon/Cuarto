var express = require ('express'); // importamos la dependencia
var  app = express(); //declaramos una app de express

var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public')); 
app.set('view engine', 'ejs');
//seteamos el archivo views y que utiliza ejs

//espesificamos a la aplicacion de express que el directorio virtual para el contenido
//estatico se llama assets y que ese nombre será mapeado a una carpeta fisica
//public que se encuentra en el directorio donde corre la app dirname
app.use('/', function (req, res, next) {
    console.log('Requiest Url:' + req.url);
    next();
});
//este codigo nos permite ver que url se estan usando en la terminal de comandos


//primera ruta (está al nivel de la raíz /), Hello world!
//ahora lo que hace es pedir que renderise el archivo index
app.get('/', function (req, res) {
    res.render('index');
});

//segunda ruta /api, regresa un objeto JSON
app.get('/api', function (req, res) {
    res.json({firstname: 'Jhon', lastname: 'Doe'});
});

//ruta numbers que debe de hacer una lista del numero que señales en la ruta
//ademas de decir si es par o impar
//la funcion se efectua en los archivos ejs, por lo que en esta llamada
//solo se le pide que renderise el archivo numbers
app.get('/numbers/:id', function (req, res) {
    res.render('numbers', {ID: req.params.id });
});

//tercera ruta, recibe un parametro
//en esta ruta, se recibe un parametro especificado en la propia ruta
//este parametro es utilizado para regresar el nombre de una persona

//ahora lo que hace es pedir que renderise el archivo person
app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id });
});
app.listen(port); //levanta el server y ponerlo a la escucha