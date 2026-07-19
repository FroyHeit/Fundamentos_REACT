// ==========================================
// EL OPERADOR CONDICIONAL TERNARIO
// ==========================================

// El operador ternario es el único operador en JavaScript que toma tres operandos:
// 1. Una condición seguida de un signo de interrogación (?).
// 2. Una expresión a ejecutar si la condición es verdadera (truthy) seguida de dos puntos (:).
// 3. Una expresión a ejecutar si la condición es falsa (falsy).

// Sintaxis básica:
// condicion ? expresion_si_es_verdadera : expresion_si_es_falsa;

// ----------------------------------------------------
// 1. COMPARACIÓN CON IF-ELSE TRADICIONAL
// ----------------------------------------------------
const activo = true;

// Con if-else tradicional:
let mensajeConIf = '';
if (activo) {
    mensajeConIf = 'El usuario está activo';
} else {
    mensajeConIf = 'El usuario está inactivo';
}
console.log("Resultado con IF:", mensajeConIf);


// Con operador ternario:
// Es mucho más corto, limpio y permite asignación directa a variables.
const mensajeConTernario = (activo) ? 'El usuario está activo' : 'El usuario está inactivo';
console.log("Resultado con TERNARIO:", mensajeConTernario);


// ----------------------------------------------------
// 2. USO EN TEMPLATE LITERALS (Muy común en React)
// ----------------------------------------------------
// En React se usa constantemente para evaluar dinámicamente clases CSS, textos o estados.
const saldo = 100;
console.log(`Estado de cuenta: ${saldo >= 200 ? 'Tienes fondos' : 'Estás en números rojos'}`);


// ----------------------------------------------------
// 3. EL OPERADOR LÓGICO AND (&&) COMO CORTOCIRCUITO
// ----------------------------------------------------
// Si solo te interesa evaluar el caso VERDADERO y no quieres hacer nada en el caso FALSO,
// en lugar del ternario, puedes usar el operador lógico de cortocircuito `&&`.
// En React, esto es ideal para renderizar condicionalmente elementos del DOM.

// condicion && expresion_si_es_verdadera
const esAdmin = true;
const mensajeAdmin = esAdmin && 'Acceso total al sistema de administrador';

console.log("Resultado con &&:", mensajeAdmin); // Imprime: Acceso total al sistema de administrador

const esInvitado = false;
const mensajeInvitado = esInvitado && 'Acceso limitado a invitado';
console.log("Resultado con &&:", mensajeInvitado); // Imprime: false (no ejecuta la expresión de la derecha)
