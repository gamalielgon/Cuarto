const mongoose = require('mongoose');
//inyectamos la dependencia de mongoose
let PersonSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});
//se instancia el nuevo schema de mongoose

module.exports = mongoose.model('Persons', PersonSchema);
//se exporta una instancia de modelos de mongoose
/*para esta instancia se necesitaran 2 parametros
uno de ellos es "Persons" y el segundo es el nombre del esquema
*/