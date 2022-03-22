const express = require('express');
const app = express();

app.get('/', (req, res)=> {// route handler
    res.send('Hello world, this is the root route');
});

app.listen(3000);
app.get('/uno', (req, res)=> { //route handler
    res.send('Hello world, frome route One');
});
//Esta funcion se manda a la ruta prueba y regresa codigo en html 
app.get('/prueba', (req, res)=> { //route handler
    res.send('<h1>Hola desde la prueba</h1><p>Esto es el cuerpo de la prueba</p>');
})