const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        calle: 'Calle 123',
        ciudad: 'Miami'
    }
};


const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);