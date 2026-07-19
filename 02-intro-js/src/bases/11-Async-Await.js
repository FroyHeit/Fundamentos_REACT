// ==========================================
// ASYNC Y AWAIT EN JAVASCRIPT
// ==========================================

// async y await son palabras clave introducidas en ES2017 (ES8) que sirven para trabajar
// con promesas de una manera más limpia, legible y con apariencia síncrona.
// Evitan tener que encadenar múltiples métodos .then() y .catch().

// ----------------------------------------------------
// 1. LA PALABBRA CLAVE 'async'
// ----------------------------------------------------
// Se coloca antes de declarar una función. Al hacer esto, indicamos que la función
// es asíncrona y automáticamente hará que retorne una Promesa.
// Ejemplo: async function miFuncion() {}  o  const miFuncion = async () => {}

// ----------------------------------------------------
// 2. LA PALABRA CLAVE 'await'
// ----------------------------------------------------
// Solo se puede usar DENTRO de una función declarada con 'async'.
// Hace que JavaScript "espere" de manera no bloqueante a que una promesa se resuelva
// antes de continuar con la ejecución de la siguiente línea de código de esa función.

const obtenerImagenGiphy = async () => {
  
  // ----------------------------------------------------
  // 3. MANEJO DE ERRORES CON try...catch
  // ----------------------------------------------------
  // Al no utilizar `.catch()`, manejamos los errores usando la estructura
  // clásica de try/catch de JavaScript.
  try {
    const apiKey = 'C12C2T5uST28JB57S7dH4B8sIRLsdcTa'; // API Key de ejemplo

    // Esperamos a que la petición fetch se complete
    // 'await' detiene la ejecución local de la función hasta que se resuelva la promesa de fetch()
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    // Esperamos a que la conversión a formato JSON termine
    // resp.json() es otra promesa, por lo que usamos 'await'
    const { data } = await respuesta.json();

    // Extraemos la URL del GIF
    const { url } = data.images.original;
    console.log("¡Éxito con Async/Await! URL:", url);

    // Creamos y renderizamos la imagen en el DOM
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Gif Aleatorio Async Await';
    img.style.maxWidth = '300px';
    img.style.borderRadius = '8px';
    img.style.boxShadow = '0px 4px 10px rgba(0,0,0,0.2)';

    document.body.append(img);

  } catch (error) {
    // Si cualquiera de las promesas dentro del bloque 'try' falla o es rechazada,
    // la ejecución salta inmediatamente aquí.
    console.error("Hubo un error al ejecutar la petición asíncrona:");
    console.error(error);
  }
};

// Ejecutamos nuestra función asíncrona
obtenerImagenGiphy();
