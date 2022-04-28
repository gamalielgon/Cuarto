const express = require ('express');//inyecccion de la dependencia
let  app = express();
let PORT = process.env.PORT || 3000; //definicion del puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

app.set('view engine', 'ejs');

app.get('/',(req, res)=>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css">
<title>Document</title> </head> 
<body> <h1>Hola mundo </h1>
</body> </html>`)
});
/*cambiamos el codigo para que ahora requiera dos parametros, uno de ellos
es el motor de vista donde se rendereisará y el los parametros que recibe
*/

/*Para finalizar la actividad, añadí otro parametro mas que se debe de recibir
que es las veces o "times" que se debe de repetir la oración, para lo que añadí Tm
como time y en el URL debe aparecer como Times.
Primero comprobe que esto funcionace, ya que cambie algunas variables de nombre
entonces añadí una oracion en Person.ejs en la cual recibia el nombre, el mensaje
y las veces, una ves comprobé que se recibian correctamente estas 3 variables,
busque en internet como se usaba el comando Switch para poner los diferentes mensajes
cuando encontré uno que parecia funcionar, lo adapté a mis variables y mis parametros
Y por ultimo, para el ciclo y el if, utilicé de base el codigo de actividades pasadas
y al igual que el otro código, lo adapte a lo que necesitaba.
*/
app.get('/person/:id',(req, res)=>{
    res.render('person', {ID: req.params.id, Msg: req.query.Message, Tm: req.query.Time});
});

app.listen(PORT);