'use-strict';

//crearemos muchos objetos personas
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

/*
//crearemo un arrays de personas
var personas = [sacha, alan, martin, dario, vicky, paula]

var i;

//crearemos un for para que nos ponga todas las personas con su respectiva altura!
for (i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}*/

//FILTRACION DE ARRAYS
const esAlta = ({ altura }) => {
    return altura >= 1.8;
}

var personas = [sacha, alan, martin, dario, vicky, paula];

var personasAltas = personas.filter(esAlta);

// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// })

console.log(`Las personas altas son:`);
console.log(personasAltas);

//personas bajas
const esBaja = ({ altura }) => {
    return altura <= 1.7;
}

var personasBajas = personas.filter(esBaja);

console.log(`Las personas Bajas son:`);
console.log(personasBajas);

//TEMA MAP
// persona.altura = persona.altura * 100
const pasarAlturaACms = (persona) => {
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

var personasCms = personas.map(pasarAlturaACms)

console.log("La altura en centimetro es: ");
console.log(personasCms);


// var acumulador = 0
//
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }
//funcion reducer

const reducer = (acumulador, { cantidadDeLibros }) => {
    return acumulador + cantidadDeLibros;
}
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)