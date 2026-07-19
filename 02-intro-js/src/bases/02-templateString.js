//Template Strings 
const nombre = "Juan";
const apellido = "Perez";
const edad = 30;

const persona = nombre + " " + apellido;

const personatemplateString = `Hola mundo, 
${nombre} ${apellido}`;


const template = `Hola Mundo`;

console.log(personatemplateString);

function getSaludo() {
    return "Hola Mundo";
}

console.log(`Este es un texto con una funcion dentro: ${getSaludo()}`);