//esto es un prototipo
//var name = prompt('¿Cuál nombre quieres Descubrir?');

//padre
/*function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}*/

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        if (this.altura >= 1.80) {
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, ademas soy alto y mido ${this.altura}`);
        } else if (this.altura <= 1.70) {
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, ademas soy bajo y mido ${this.altura}`);
        }
    }

    soyAlto() {
        if (this.altura >= 1.80) {
            console.log("Feliciades eres alt@");
        } else if (this.altura <= 1.70) {
            console.log("Ohooo eres baj@!");
        }
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}
//function utlizida





var sacha = new Persona('Sacha', 'Lifszyc', 1.80);
var erika = new Persona('Erika', 'Luna', 1.65);
/*var arturo = new Persona('Arturo', 'Martinez', 1.70);
var manases = new Persona('Manases', 'Turcios', 1.80);


//name = Persona.prototype.saludar(Persona);
manases.saludar();

//modificar prototipos mas
manases.soyAlto();
*/
var manases = new Desarrollador('Manases', 'Turcios', 1.80);

//funciones arrow en programcion orientada a objetos
//las Clases en javascripts

//reeescricion