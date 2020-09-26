//Clase creacion de objetos
var Manases = {
    nombre: "Alberto Manases",
    apellido: "Turcios Ortez",
    edad: 20
}

var Jose = {
    nombre: "Jose Manuel",
    apellido: "Lopez Martinez",
    edad: 21
}

/*
function imprimirEdad(name, year) {
    console.log(`${name} tiene, ${year} años`);
}

imprimirEdad(nombre, edad);

*/

//alcance de las funciones
/*

function imprimirMayuscula({ nombre }) {
    console.log(nombre.toUpperCase());
}*/



/*

//others funtcion //acceder a los atributos 
function imprimirMayuscula(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase());
}

imprimirMayuscula(Manases);
imprimirMayuscula(Jose);
//imprimirMayuscula({ nombre: "Pablo Israel" });


function imprimirNombreyApellido(nombre, apellido) {
    console.log(`\nHola mi nombre es ${nombre}, y tengo ${apellido} años. `);
}

imprimirNombreyApellido(Manases.nombre, Manases.edad);
imprimirNombreyApellido(Jose.nombre, Jose.edad);

*/

/*
//parametros por valor y por equivalencia 
function cumpleaños(personas) {
    return {
        ...personas,
        edad: personas.edad + 1
    }
}

var manasesViejo = cumpleaños(Manases);
*/


//comparaciones en Js
var x = 4,
    y = "4";

//cuando tenemos un objeto y lo comparamos con otro del mismo, nombre dara false el resultado,