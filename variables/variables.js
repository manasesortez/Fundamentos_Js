//primer clase Js
/**

console.log("Hola Mundo JS!");

var nombre;
nombre = "Manases";
var apellido = "Turcios Ortez";

console.log("\nBienvenido, " + nombre + " " + apellido);

//variables tipos string
var nombreMayuscula = nombre.toLocaleUpperCase();
var apellidoMin = apellido.toLocaleLowerCase();

var primerletradelnombre = nombre.charAt(0);

var cantidaddeletras = nombre.length

//interpolacion de texto 
var nombreCompleto = (`Hola Mi Nombre, es ${nombre} ${apellido}`);

var nombreCompleto = (`Hola Mi Nombre, es ${nombre} ${apellido.toUpperCase()}`);

var str = nombre.substr(1, 2);

var nombre2 = "Manases";
var ultimaLetradelNombre = nombre2.length - 1;
var UltimaLetra = nombre2.charAt(ultimaLetradelNombre);

console.log(`La Ultima letra de mi Nombre es: ${UltimaLetra.toUpperCase()}`);

**/

//Clase Numeros

var edad;
edad = 20;

//agregar un numero mas 
edad += 1;

//operadores
var peso = 80;
peso = peso - 2;

//suma de numero
var sandwich = 1;
peso = peso + sandwich;
//79

//hacer ejercio
var futboll = 8;
peso = peso - futboll;

//decimales y numeros
var precioVino = 200.3;
var total = precioVino * 100 * 3 / 100;

//tambien lo podemos hacer con math.round()
var totalS = Math.round(precioVino * 100 * 3) / 100;

//how string 
var totalStr = total.toFixed(2);

//parseFloat()
var Total_N = parseFloat(totalStr);

//hacer division
var pizza = 10;
var personas = 2;
var cantidadpersona = pizza / personas;