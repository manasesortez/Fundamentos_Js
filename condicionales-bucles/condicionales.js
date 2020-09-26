//condicionales 
/*
var Manases = {
    nombre: "Alberto Manases",
    apellido: "Turcios Ortez",
    edad: 20,
    peso: 80,
    ingeniero: true,
    guitarrista: false,
    cocinero: false,
    diseñador: true,
    dj: false,
    drone: false
}

var Jose = {
    nombre: "Jose Manuel",
    apellido: "Lopez Martinez",
    edad: 15
}


function profesiones(persona) {
    console.log(`${persona.nombre} es: `);

    if (persona.ingeniero === true) {
        console.log("Ingeniero");
    }

    if (persona.diseñador === true) {
        console.log("Diseñador Grafico");
    }

    if (persona.cocinero === true) {
        console.log("Cocinero");
    } else {
        console.log(`No eres cocinero`);
    }
}

profesiones(Manases);


//persona Mayor o menor
const MAYOR_DE_EDAD = 18;


function MayordeEdad(persona) {
    return persona.edad >= MAYOR_DE_EDAD;
}

function ImprimirMayorEdad(persona) {
    if (MayordeEdad(persona)) {
        console.log("::Eres mayor de Edad::");
    } else {
        console.log("::Eres Menor de Edad::");
    }
}

//funcion declarativa
var MayordeEdad = function(persona) {
    return persona.edad >= MAYOR_DE_EDAD;
}

function ImprimirMayorEdad(persona) {
    if (MayordeEdad(persona)) {
        console.log("::Eres mayor de Edad::");
    } else {
        console.log("::Eres Menor de Edad::");
    }
}

//arrow function()

var MayordeEdad = (persona) => {
    return persona.edad >= MAYOR_DE_EDAD;
}

function ImprimirMayorEdad(persona) {
    if (MayordeEdad(persona)) {
        console.log("::Eres mayor de Edad::");
    } else {
        console.log("::Eres Menor de Edad::");
    }
}

function permitirAcceso(persona) {
    if (!MayordeEdad(persona)) {
        console.log("ACCESO DENEGADO");
    } else {
        console.log("ACCESO PERMITIDO");
    }
}


//ejemplo con el peso y las condicionales
console.log(`Al principio del año, ${Manases.nombre}, pesa: ${Manases.peso}Kg`);

var index;
const INCREMENTO_PESO = 0.200;
const DIAS_DEL_ANIO = 365;
const META = Manases.peso - 3;
var dias = 0;

const AUMENTAR_PESO = (persona) => {
    return persona.peso += INCREMENTO_PESO;
}

const ADELGAZAR_PESO = (persona) => {
    return persona.peso -= INCREMENTO_PESO;
}

const COME_MUCHO = () => {
    return Math.random() < 0.3;
}

const HACE_EJERCICIO = () => {
    return Math.random() < 0.4;
}


for (index = 1; index <= DIAS_DEL_ANIO; index++) {
    var ramdom = Math.random();
    if (ramdom < 0.25) {
        AUMENTAR_PESO(Manases);
    } else if (ramdom < 0.50) {
        ADELGAZAR_PESO(Manases);
    }
} //Creacion del WHILE 

//manases fue al nutricionista

while (Manases.peso > META) {
    if (COME_MUCHO()) {
        AUMENTAR_PESO(Manases);
    }
    if (HACE_EJERCICIO()) {
        ADELGAZAR_PESO(Manases);
    }
    dias += 1;
}

var contador = 0;

const llueve = () => {
    return Math.random() < 0.25;
}

do {
    contador++;
} while (!llueve())

//toFixed() significa que el valor de este solo tendra n digitos que le pongamos 
//console.log(`Pasaron ${dias} dias, hasta que ${Manases.nombre}, adelgazara 3kg`);

console.log(`Fui a ver si Llovia, ${contador} ${contador === 1 ? 'vez':'veces'}`);
*/

//creacion de un switch

//el promt es para ingresar el signo es como un alert
var signo = prompt('¿Cuál es tu signo?')

switch (signo) {
    case 'acuario':
        console.log('Intente aislarse del mundo y sentarse en soledad a reflexionar sobre ciertas cuestiones de su vida que últimamente no lo dejan progresar de la manera que anhela.')
        break
    case 'piscis':
        console.log('Sepa que de ahora en más, su futuro solo dependerá de usted solo. Entienda que ya está capacitado para tomar sus propias decisiones y realizar los planes deseados.')
        break
    case 'cancer':
    case 'cáncer':
        console.log('Dentro su cabeza le surgirán ideas extraordinarias, sobre todo si se dedica a actividades creativas donde pueda ponerlas en práctica.')
        break
    case 'aries':
        console.log('Deje de preocuparse más de lo necesario, ya que podría sufrir una crisis de estrés. Ese problema que lo tiene inquieto, se resolverá de la manera menos esperada.')
        break
    case 'tauro':
        console.log('Se sentirá agobiado por sus responsabilidades, déjese ayudar por la gente que lo quiere. Procure aceptar los consejos y recapacitar sobre los errores cometidos.')
        break
    case 'geminis':
    case 'géminis':
        console.log('Sepa que en pocos días recuperará su armonía mental. De esta forma, podrá llevar a cabo todos los proyectos que tiene en mente con claridad y constancia.')
        break
    case 'leo':
        console.log('Intente hacer lo posible para superar los miedos que lo agobian cada vez que debe tomar una decisión importante en su vida. Relájese.')
        break
    case 'virgo':
        console.log('Esté atento a los asuntos familiares que tiene pendientes hace días. Sepa que la Luna en su signo le permitirá lograr todo lo que se proponga en el día.')
        break
    case 'libra':
        console.log('Tenderá a ofenderse por todo y considerar enemigas a todas las personas que lo estiman de verdad, ya que estará muy vulnerable a las críticas en el día de hoy.')
        break
    case 'escorpio':
        console.log('Aprenda que todo cambio en la vida siempre es muy constructivo. Momento óptimo para hacer un alto en su vida y ver desde otro punto de vista las cosas.')
        break
    case 'sagitario':
        console.log('Debe tener presente que quienes no comparten sus ideas o decisiones, no siempre son necesariamente sus enemigos. Respete las opiniones de los demás.')
        break
    case 'capricornio':
        console.log('Si pretende sentirse más feliz, use aquello que ha aprendido a lo largo de su vida. Pronto mejorarán las condiciones actuales que lo agobian a diario.')
        break
    default:
        console.log('No es un signo zodiacal válido')
        break
}