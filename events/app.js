// con este codigo creamos un objeto con las propiedades de nombre
//edad y apellido
let obj = {
    nombre: `Carlos`,
    edad: 44,
    apellido: `Ulibarri`,
    keypress: function (){
        console.log(`se ha presionado una tecla`);
    },
    mouseOver: function (){
        console.log(`El puntero del mouse esta arriba`)
    }
}
// con este codigo mandamos la propiedad denominada como nombre, escrita como variable
console.log(obj.nombre);
//igual con este codigo, pero con este estamos escribiendo como string
console.log(obj[`nombre`]);
//ahora estamos asignando el nombre de la propiedad a una llave
let myKey = `nombre`;
// usamos esta llave para sustituir el nombre de la propiedad
// esto previene fallos humanos al escribir el codigo
// y nos permite cambiar el nombre de la variable sin tener que cambiar
// todo el codigo escrito
console.log(obj[myKey]);
//ahora la key que ya usamos, le camibamos el nombre y la podemos usar
//para invocar otras propiedades o funciones
myKey = `keypress`;
//en este caso como vamos a usar funciones tenemos que agregar los parentesis
console.log(obj[myKey]());
myKey = `mouseOver`;
console.log(obj[myKey]());
//imagino que esto puede ser util para cuando quieras cambiar el nombre de la funcion
//en un codigo grande

let myArray = [];
myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function (){
    console.log('hola desde el array');
});
console.log(myArray);
//al invocar el objeto "myArray" se muestra todo lo que tiene dentro
// por ello, se aprecia cada uno de los objetos que le fuimos metiendo
// esto sucede porque en JS no hay problema con tener objetos que sean
// mezclas de tipos

console.log(myArray[obj[myKey]()]);
//al meter un objeto dentro de otro, puedo llamar al objeto dentro desde,
// el objeto de "fuera", en este caso puedo llamar al obj desde myArray
//en este caso usé la llave myKey para llamar la funcion mouseOver
//y la estructura que hay que usar es la misma que hemos usado, pero
// agregando otra "capa"

console.log(myArray[3]());
//en este caso, al tener una funcion sin nombre dentro del array
// tenemos que llamarla desde la posicion del array, en este caso la poscicion
// 3

let funcArray = [];
// con esto creamos un array, a este array le insertamos diferentes strings
funcArray.push(() => {
    console.log('Function 1');
});

funcArray.push(() => {
    console.log('Function 2');
});
funcArray.push(() => {
    console.log('Function 3');
});

funcArray.forEach((item) => {
    item();
})
// con esta funcion le pedimos que por cada parte del array
// imprima lo que tiene