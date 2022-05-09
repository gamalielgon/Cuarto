const express = require('express'); //inyeccion de la dependencia
let app = express();
let PORT = process.env.PORT || 3000; //definicion del puerto escucha
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

/*Aqui le estamos diciendoq ue vamos a "parsear" el body */
app.use(express.urlencoded({ extended: false}));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css"></link>
    <title>Document</title> </head>
    <body> <h1>Hola mundo </h1>
    </body></html>`)
});

app.get('/person/:id', (req, res)=>{
    res.render('person', {Name: req.params.id, Message: req.query.message, Times: req.query.times});
});

/* Para poder acceder al la ruta de post student, primero necesitamos un "get"
student, y que esta nos envie el formulario para poder llenarlo y renderizarlo.
 */
app.get('/student', (req, res) => {
    res.render('index');
});

/* esta ruta nos permite enviar el resultado del formulario. 
Tambien se nos recalco que los nombres de las variables deben coincidir al completo
Sino podemos perder la variable y no mandar la informacion correcta.
*/
app.post('/student', (req, res) => {
    res.send(`First name is: ${req.body.fname}, 
    Last Name is: ${req.body.lname}`);
});

/*En esta parte se especifica que se le va a pedir informacion de tipo json
la informacion nos enviará a la consola el nombre y apellido del estudiante
tambien se debe adaptar el ejs, para que pueda ser compatible con este tipo de informacion
*/
app.post('/personjson', express.json({type: '*/*'}), (req, res) => {
    console.log('El objeto contiene:', (req.body));
    console.log('Nombre:', req.body.firstname);
    console.log('Apellido:', req.body.lastname);
});

app.listen(PORT);