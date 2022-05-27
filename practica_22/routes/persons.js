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
       // res.json(persons);
       res.render('personsIndex', {persons})
    });
});

router.get('/main', (req, res)=>{
    res.render('main');
});

/*Esta ruta lo que hace es recibir el id, y buscarlo en la coleccion de params
depues se invoca el metodo findByIdAndRemove, que regresa dos posibles valores
un err si es fallido o el documento con el texto si es correcto.
Y luego borra el documento, para terminar recargando la pagina para actualizar
 */
router.get('/deletePerson/:id', function(req, res, next){
    Person.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err) return next(err);
        res.redirect('/persons');
    });
});

router.get('/findById/:id', function(req, res, next) {
    Person.findById(req.params.id, function (err, person) {
        if (err) return next (err);
        res.render('personUpdate', {person});
    });
});

/*Para esta ruta se va a necesitar 2 parametros, el objeto a modificar,
y el objeto modificado. el metodo findByIdAndUpdate regresa dos posibles valores
un err si es incorrecto o el objeto modificado si es correcto. 
Por ultimo se redirecciona a listado para que se vea la coleccion actualizada.
 */
router.post('/updatePerson', function(req, res, next) { 
    Person. findByIdAndUpdate (req.body.objId, { 
    nombre: req.body.nombre, 
    edad: req.body.edad, 
    tipoSangre: req.body.tipoSangre, 
    nss: req.body.nss }, function (err, post) { 
        if (err) return next(err); 
        res.redirect('/persons');
    });
});

//agregamos la primera ruta /persons
module.exports=router;
//exportar el ruteador