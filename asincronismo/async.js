//esto es un prototipo
//var name = prompt('¿Cuál nombre quieres Descubrir?');
//padre


/*

function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {
        if (this.altura >= 1.80) {
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, ademas soy alto/a y mido ${this.altura}`);
        } else if (this.altura <= 1.70) {
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, ademas soy bajo/a y mido ${this.altura}`);
        };
        //asincronismo
        if (fn) {
            fn(this.nombre, this.apellido, null)
        }
    }

    soyAlto() {
        if (this.altura >= 1.80) {
            console.log("Feliciades eres alto/a");
        } else if (this.altura <= 1.70) {
            console.log("Felicidades eres bajo/a!");
        }
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }

    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
            //asincronismo
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}
//function utlizida

function respondeSaludo(nombre, apellido, esDev) {
    console.log(`Buen dias ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`Ahn mira no sabia que eras Dev`);
    }
}


var sacha = new Persona('Sacha', 'Lifszyc', 1.80);
var erika = new Persona('Erika', 'Luna', 1.65);
var manases = new Desarrollador('Manases', 'Turcios', 1.80);

var arturo = new Persona('Arturo', 'Martinez', 1.70);
var manases = new Persona('Manases', 'Turcios', 1.80);

//name = Persona.prototype.saludar(Persona);
manases.saludar();

//modificar prototipos mas
manases.soyAlto();


erika.saludar();
sacha.saludar(respondeSaludo);
manases.saludar(respondeSaludo);

//funciones arrow en programcion orientada a objetos
//las Clases en javascripts

//reeescricion
*/


//starword
const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';
const PLANETS_URL = 'planets/:id/';
const STARTSHIPS_URL = 'starships/:id/';
//OPCIONES
const OPTS = { crossDomain: true };

//funciones para obtener el id de todos 
var obtenerPerson = function(id) {
    return new Promise(function(resolve, reject) {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

        $.get(URL, OPTS, function(data) {
            resolve(data)
        }).fail(function() {
            reject(id)
        });
    })

}

var obtenerPlanet = function(id) {
    return new Promise(function(resolve, reject) {
        const URL = `${API_URL}${PLANETS_URL.replace(':id', id)}`;

        $.get(URL, OPTS, function(data) {
            resolve(data)
        }).fail(function() {
            reject(id)
        });
    })
}

var obtenerStartShips = function(id) {
    return new Promise(function(resolve, reject) {
        const URL = `${API_URL}${STARTSHIPS_URL.replace(':id', id)}`;

        $.get(URL, OPTS, function(data) {
            resolve(data)
        }).fail(function() {
            reject(id)
        });
    })
}

function onError(id) {
    console.log(`Sucedio un error en la ejecucion en el id, ${id}`)
}

//promesas
async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var promesas = ids.map(function(id) {
        return obtenerPerson(id);
    })
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)

    } catch (id) {
        onError(id)
    }

}
obtenerPersonajes()

obtenerPerson(1)
    .then(function(personaje) {
        console.log(`Soy, ${personaje.name}`)
        return obtenerPlanet(3)
    }).then(function(planeta) {
        console.log(`Me dirijo al planeta, ${planeta.name}`)
        return obtenerStartShips(9)
    }).then(function(startships) {
        console.log(`Voy a bordo de la nave, ${startships.name}`)
    }).catch(onError)