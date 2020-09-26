//Creacion Funciones
var nombre = 'Manases',
    edad = 20;

/*
function imprimirEdad(name, year) {
    console.log(`${name} tiene, ${year} años`);
}

imprimirEdad(nombre, edad);

*/

//alcance de las funciones
function imprimirMayuscula(name) {
    name = name.toUpperCase();
    console.log(name);
}

imprimirMayuscula(nombre);