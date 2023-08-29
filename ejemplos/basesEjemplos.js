// Ejemplos de javascript

// Comentarios de línea

/**
 * Comentario de bloque
 */


// Imprimir en pantalla
console.log("Hola mundo!");
console.log("-----");

const edad = 58;
let nombre = "Mamnu";
let apellido = "Saldarriaga"
const esEstudiante = false;
const altura = 1.78;
const semestres = [1, 2, 3, 4, 5]; //List -> Array
const materiaPreferida = {nombre: "Cálculo", id: 0}; // Diccionarios -> Objeto -> JSON (Javascript Object Notation)

const universidad = null;

const carrera = undefined;

// Const no se puede actualizar su valor

// Let se puede actualizar su valor


console.log("Tipo de dato de nombre: " + typeof nombre);
console.log("Tipo de dato de edad: " + typeof edad);


console.log("-------------- Conversión de string a number ----------");
const precioMatricula = "5000000.5";
console.log("Entero: " + parseInt(precioMatricula));
console.log("Flotante: " + parseFloat(precioMatricula));

console.log("-------------- == & === -------------");
console.log("Doble igual: " , "45" == 45);  // TRUE // COMPARA EL VALOR
console.log("Triple igual: " , "45" === 45); // FALSE // COMPARA EL VALOR Y EL TIPO

console.log("---- Concatenación ----");
console.log(nombre + " " + apellido);
console.log(`${nombre} ${apellido}`);

console.log("---- Operador ternario ----");
console.log( edad >= 18 ? "Es mayor de edad" : "Es menor de edad"); //Expresión ? enunciado verdadero : enunciado falso
let condicion = edad > 18;
if(condicion) { };
if (condicion) { } else { };


console.log("---- Switch case ----");
const dia = "LUNES";
switch (dia) {
    case "LUNES":
        console.log("LUNES");
        break;
    case "MARTES":
        console.log("MARTES");
        break;
    case "MIERCOLES":
        console.log("MIERCOLES");
        break;
    default:
        console.log("NO ES VÁLIDO");
        break;
}


console.log("---- Ciclos ----");
for (let index = 0; index < 10; index++) {


};

console.log("---- For of ----");
for (const item of [1, 2, 3]){
    console.log(item);
};

console.log("---- For in ----");
for (const key in materiaPreferida){
    console.log(key);
};

console.log("---- ForEach ----");
[1, 2, 3].forEach(Element => {
    console.log(Element);
});

console.log("---- Funciones ----");
function imprimirNombre(nombre) {
    console.log(nombre);
};

// Invocar la función

imprimirNombre(nombre);

/*
// nfn es el atajo para una función nombrada
const imprimirNombreApellido = (nombre, apellido) => { 
    console.log(`${nombre} ${apellido}`);   // Arrow function
};

imprimirNombreApellido(nombre, apellido);

(() => {
    console.log();
});
nf
const crearNombreCompleto = (nombre, apellido) => {
    console.log("-- GLOBAL SCOPE FAKE --");
    console.log(nombre, apellido);
    let name = nombre;
    if (nombre.length > 3) {
        let name = "Nombre corto " + apellido;
        console.log("118" + name);
    }
};
console.log("116" + name);

const botonesHtml = document.getElementsByTagName('button');
console.log(botonesHtml);

crearNombreCompleto(nombre, apellido);
*/

console.log("---- Array ----");
let estudiantes = [];

//Agregar un elemento
// estudiantes.push(5);
// estudiantes.push(null);
// estudiantes.push({});
// estudiantes.push(() => { console.log(); });

estudiantes.push({ "nombre": "María", id: 123});
estudiantes.push({ "nombre": "María", id: 12345});

const imprimirEstudiante = (estudiantes) => { 
    console.log(estudiantes) };

estudiantes.forEach( imprimirEstudiante );
console.log(estudiantes);

estudiantes.forEach((x) => console.log(x.nombre));

console.log("---- Búsqueda con filter ----");

for (let i = 0; i < estudiantes; i++) {
    if (estudiantes[i].nombre == "María") {
        console.log(estudiantes[i].id);
    };
};


const marias =estudiantes.filter(x => x.nombre == "María");
marias[0].id;


const maria = estudiantes.find(x => x.nombre == "María");
console.log(estudiantes);


console.log("---- MAP ----");

estudiantes = estudiantes.map(x => { return { ...x, edad: null}});
console.log(estudiantes);

//JSON (javascript object notation)


function jsonsEnJavascript(){
    const ciudad={
        nombre: "Medellin",
        poblacion: 2.5,
        barrios_count: 31,
        calcularCantidadVehiculos(){
            console.log("el total de vehículos es", "55M", this.nombre)
        }
    }
}

//Destructuracion

const{nombre:nombreCiudad}=ciudad;
console.log(nombreCiudad)
ciudad.calcularCantidadVehiculos()
console.log(ciudad.nombre)
console.log(ciudad["nombre"])




