const express = require('express');
//inyectamos la dependencia de express
const router = express.Router();
//generamos la instanicia del router
const mongoose = require('../node_modules/mongoose');
//inyectamos la dependencia de mongoose
let Person = require('../models/person');
//inyectamos la dependecia del modelo "person"

router.get('/persons', function(req, res, next) {
    Person.find(function (err, persons) {
        if (err) return next(err);
        res.json(persons);
    });
});

//agregamos la ruta que nos permite mostrar formulario con el cual tomaremos los datos para crear un nuevo documento
router.get('/person', function(req, res) {
    res.render('person');
});
//la ruta de post, atenderá la petición que se haga desde el formulario y nos inserta
//un nuevo documento en la base de datos
//tambien hay que asegurarse que cada ID coincida con el resto.
router.post('/addPerson', function(req, res) {
    const myPerson = new Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss }); //crea la entidad
    myPerson.save(); //guarda en bd
});

//agregamos la ruta /persons
module.exports=router;
//exportar el ruteador