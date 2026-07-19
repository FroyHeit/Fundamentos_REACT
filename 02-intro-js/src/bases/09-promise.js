// ==========================================
// EL CONCEPTO DE PROMESAS EN JAVASCRIPT
// ==========================================

// Una Promesa (Promise) en JavaScript es un objeto que representa la terminación
// o el fracaso de una operación asíncrona.
// Piensa en ella como una "promesa" en la vida real: te comprometes a hacer algo,
// y en el futuro, esa promesa se cumplirá (resolve) o fallará por alguna razón (reject).

// ------------------------------------------
// 1. ESTADOS DE UNA PROMESA:
// ------------------------------------------
// - Pending (Pendiente): Estado inicial, no se ha cumplido ni rechazado.
// - Fulfilled (Cumplida): La operación se completó con éxito. Se ejecuta resolve().
// - Rejected (Rechazada): La operación falló. Se ejecuta reject().

// ------------------------------------------
// 2. CREACIÓN DE UNA PROMESA:
// ------------------------------------------
// Para crear una promesa, usamos el constructor `new Promise`.
// Recibe una función (callback) con dos parámetros que a su vez son funciones:
// - resolve: Función que llamamos cuando la operación es exitosa.
// - reject: Función que llamamos si ocurre un error.

const obtenerDatosDeUsuario = new Promise((resolve, reject) => {
    // Simulamos una operación asíncrona (como pedir datos a un servidor) con setTimeout
    console.log("Iniciando petición asíncrona de datos...");

    setTimeout(() => {
        // Simulamos que todo salió bien (éxito)
        const exito = true;

        if (exito) {
            const usuario = {
                id: 101,
                nombre: 'Froy',
                rol: 'Developer'
            };
            // Al llamar a resolve, pasamos los datos que queremos enviar como resultado
            resolve(usuario);
        } else {
            // Si hubiese fallado, llamaríamos a reject con el motivo del error
            reject("Error: No se pudieron recuperar los datos del usuario.");
        }
    }, 2000); // Se ejecutará después de 2 segundos (2000 milisegundos)
});

// ------------------------------------------
// 3. CONSUMIR O ESCUCHAR LA PROMESA:
// ------------------------------------------
// Para manejar el resultado de la promesa, usamos métodos especiales:
// - .then(): Se ejecuta cuando la promesa es resuelta con éxito (resolve). Recibe el resultado.
// - .catch(): Se ejecuta si la promesa es rechazada (reject). Recibe el error.
// - .finally(): Se ejecuta siempre al final, sin importar si fue exitosa o falló. Útil para limpieza.

obtenerDatosDeUsuario
    .then((data) => {
        // 'data' contiene el objeto 'usuario' enviado en el resolve
        console.log("¡Promesa resuelta con éxito!");
        console.log("Datos recibidos:", data);
        console.log(`Nombre del usuario obtenido: ${data.nombre}`);
    })
    .catch((error) => {
        // Si la promesa entra en reject, se captura el error aquí
        console.error("Hubo un problema con la promesa:");
        console.error(error);
    })
    .finally(() => {
        // Se ejecuta al final, pase lo que pase (ej. ocultar spinners de carga)
        console.log("Operación finalizada (proceso terminado).");
    });

// Las promesas son asíncronas y no bloquean el flujo del programa principal:
console.log("Este console.log se ejecuta INMEDIATAMENTE después de declarar la promesa (no espera los 2 segundos).");