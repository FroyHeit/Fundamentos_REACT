// ==========================================
// EL CONCEPTO DE FETCH API EN JAVASCRIPT
// ==========================================

// La Fetch API es una interfaz moderna de JavaScript que nos permite realizar
// peticiones HTTP (asíncronas) a servidores externos de una manera sencilla y limpia.
// Fetch utiliza internamente Promesas, por lo que su flujo se maneja con .then(), .catch() y .finally().

// Para este ejemplo, usaremos el API público de Giphy para traer un GIF aleatorio.
const apiKey = 'C12C2T5uST28JB57S7dH4B8sIRLsdcTa'; // API Key de desarrollo/pruebas de Giphy

// ----------------------------------------------------
// 1. REALIZAR LA PETICIÓN
// ----------------------------------------------------
// Llamamos a fetch() pasándole la URL a la que queremos hacer la petición.
// Por defecto, fetch realiza una petición de tipo GET.
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// ----------------------------------------------------
// 2. ENCADENAMIENTO DE PROMESAS (PROMISE CHAINING)
// ----------------------------------------------------
// Dado que fetch() devuelve una Promesa, la consumimos encadenando métodos .then():

peticion
    .then((resp) => {
        // El primer .then recibe la respuesta cruda del servidor (objeto Response).
        // Para poder leer el cuerpo de la respuesta en formato JSON, llamamos a resp.json().
        // OJO: resp.json() también devuelve una Promesa, por lo que la retornamos para el siguiente .then.
        return resp.json();
    })
    .then(({ data }) => {
        // Este segundo .then recibe el objeto JSON resuelto de la promesa anterior.
        // Usamos desestructuración para extraer directamente la propiedad 'data' que envía Giphy.

        // Extraemos la URL de la imagen del GIF en tamaño original
        const { url } = data.images.original;

        console.log("¡Petición exitosa! URL del GIF obtenido:", url);

        // Creamos un elemento <img> en memoria
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Gif Aleatorio';
        img.style.maxWidth = '300px';
        img.style.borderRadius = '8px';

        // Insertamos la imagen directamente en el cuerpo (body) de nuestra página web
        document.body.append(img);
    })
    .catch((error) => {
        // Si la petición de red falla o hay un error de sintaxis en el JSON,
        // se captura inmediatamente en esta sección.
        console.warn("Error al procesar la petición:", error);
    });
