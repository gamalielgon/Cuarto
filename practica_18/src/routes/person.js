let express = require('express'); // inyeccion de la 
let router = express.Router();
//instaciacion del "router" al que asociaremos todas las rutas
//en esta practica empezamos a acomodar las rutas como debe de ser
//ya que el servidor solo debe de levantarse y tener las rutas, pero no debe
// de procesar nada
router.get('/person',(req,res)=>{
    res.send('Has solicitado el listado de personas');
})

module.exports = router;