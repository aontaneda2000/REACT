"use strict"; // => La directiva se asemeja a un string: "use strict". Cuando se sitúa al principio de un script, el script entero funciona de la manera “moderna”. Por favor, asegúrate de que "use strict" está al principio de tus scripts. Si no, el modo estricto podría no estar activado.

/****************************************/
/* Expresión vs Declaración de Función */
/***************************************/
// => Diferencias entre Declaración y Expresión de Funciones.

// Primero, la sintaxis: cómo diferenciarlas en el código.
// Segundo: El hoisting

foo(1, true);

function foo() {
  console.log("Hola");
  console.log(arguments);
  console.log(this);
}

// Expresión de función: Esta funcion no puede ser ejecutada hasta que haya sido creada
const bar = function () {
  console.log("Hola");
  console.log(arguments);
  console.log(this);
};

bar(1, true);

// {
//   const a = 5

//   console.log(a)
// }

/* use strict una funcion no puede ser accedida dentro del bloque  */

if (true) {
  function a() {
    console.log("esto es true");
  }
} else {
  function a() {
    console.log("esto es false");
  }
}

/* funcion no ejecutada porque esta dentro del bloque */
a();

let fn;

if (true) {
  fn = function a() {
    console.log("esto es true");
  };
} else {
  fn = function a() {
    console.log("esto es false");
  };
}

/* funcion ejecutada */
fn();

/* ejemplo de operador ternario con funciones */
const condicion = false;

const funcion = condicion
  ? () => {
      console.log("esto es true");
    }
  : () => {
      console.log("esto es false");
    };

funcion();

/* El JavaScript moderno admite “clases” y “módulos”, estructuras de lenguaje avanzadas (que seguramente llegaremos a ver), que automáticamente habilitan use strict. Entonces no necesitamos agregar la directiva "use strict" si las usamos. */
