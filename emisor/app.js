var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');
// lo que hicimos fue instanciar el "emisor de eventos"
// a este emisor le agregamos 2 funciones
// luego con el log mandamos un hola y luego llamamos a las funciones greet
// las cuales devuelven el saludo

emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr);
emtr.emit('jump');

// lo que arroja este codigo es la forma que tiene emtr
// emtr tiene dos eventos llamados greet ambas dentro del mismo array
// y otro evento llamado jump, que esta en un array diferente
