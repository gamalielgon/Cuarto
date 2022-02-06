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

//v1 funcion donde no necesitas declarar la variable "Let"
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

//probando funciones con parametros ES6 donde podemos sacar el cuadrado de cualquier numero
let cuadrado = (x) => x*x;
console.log(`${cuadrado(4)}`);
cuadrado();

//Funcion de saludo donde se resive el nombre y el tratamiento
//en las funciones de fat arrow se resiven parametros igual que en las normales
//podemos no usar las llaves si solo tenemos una linea de codigo
let saludo = (nombre, tratamiento) => console.log(`Buen día ${tratamiento}. ${nombre}`);
saludo(`Juan`, `Sr`);

// cuando hay un unico parametro se puede ahorrar el parentesis
let cuadrado2 = y => {
    return y * y;
}
console.log(`${cuadrado2(5)}`);

//Otra forma de abreviarlo es quitando los parentesis y sin agregar un return, si solo devuelve un valor
let cuadrado3 = z => z * z;
console.log(`${cuadrado3(3)}`);

//Refactor de los 3 saludos del principio en con los parametros de ES6 que aprendí
let greet2 = () => console.log(`Saludos guardian`);
greet2();
let logGreeting2 = fn => fn();
logGreeting2(greet2);
let greetMe2 = () => console.log(`Los arboles te saludan desde greetMe2`);
greetMe2();

