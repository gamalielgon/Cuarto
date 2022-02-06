//funcion basica
/* greet() {
    console.log(`Aloja primo!`);
} 
greet(); //invoke
*/
let greet = () => 
    console.log(`Hola muy buenas tardes`);
greet();
//functions como parametro
function logGreeting(fn) {
    fn();
};
logGreeting(greet);

//v1 funcion donde no necesitas declararla variable "Let"
logGreeting(function(){console.log(`Hola buenas`)});
//v2 funcion ES6
logGreeting(()=>{console.log(`Si funciono`)});

//probando los backticks
let x = 2;
console.log(`Hola ${x} veces
Ira esta cosa salta lineas`);

//funtion expression
let greetMe = function () {
    console.log('La marea es alta en la funcion expression');
}
greetMe();
logGreeting(greetMe);

//probando funciones de ES6
let cuadrado = (x) => x*x;
console.log(`${cuadrado(4)}`);
cuadrado();

//Funcion de saludo
let saludo = (nombre, tratamiento) => console.log(`Buen día ${tratamiento}. ${nombre}`);
saludo(`Juan`, `Sr`);