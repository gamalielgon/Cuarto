//con este codigo se crea un objeto llamado persona, cuyos atributos se
//especifican dentro de las corchetas
let persona = {
    //por ejemplo el atributo "Nombre" es Juan
    nombre: "Juan",
    apellido: "Perez",
    //Aqui creamos una funcion que junta los atributos nombre y apellido
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    //añadimos los atributos solicitados en la actividad
    calle: "Madero #114",
    colonia: "Centro",
    CP: 28000,
    munipio: "Colima",
    // y hacemos la funcion que junta estos atributos, ademas de añadirle
    //contexto
    getDom: function () {
        return `Calle: ${this.calle} Colonia: ${this.colonia} CP: ${this.CP} Municipio: ${this.munipio}`
    }
};
//por ultimo llamamos al objeto y este te enseña su contenido
console.log(persona);
//tambien podemos llamar especificamente a las funciones que queremos
console.log(persona.getName());
console.log(persona.getDom());