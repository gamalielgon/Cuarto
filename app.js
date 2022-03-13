//var Emitter = require('./emitter');
var config = require('./config');
var Emitter = require('events');
//en la consola se ve que todo funciona bien y correcto
// cambiaron algunas cosas como los nombres, y se agregaron otros eventos
var emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(config.events.GREET);
// lo que hicimos fue instanciar el "emisor de eventos"
// a este emisor le agregamos 2 funciones
// luego con el log mandamos un hola y luego llamamos a las funciones greet
// las cuales devuelven el saludo

emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
});

console.log(emtr);
emtr.emit(config.events.JUMP);

/* lo que arroja este codigo es la forma que tiene emtr
emtr tiene dos eventos llamados greet ambas dentro del mismo array 
y otro evento llamado jump, que esta en un array diferente.
Ya que he hecho los cambios con el config, cambie todas las
strings a llamadas al archivo config, para evitar el error.
Lo que sucede en la terminal, es que todo funciona perfectamente
ya que lo que antes era un string, ahora es una llamada a una string
pero, si quisiera cambiarlo, solo tengo que cambiar el texto en 
el config */