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
//agregamos la primera ruta /persons
module.exports=router;
//exportar el ruteador