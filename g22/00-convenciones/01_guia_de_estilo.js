/*********************************/
/* Guía de estilo de JavaScript */
/********************************/
/* Convenciones de codificación para JavaScript:
Por lo general, cubren:
  - Reglas de nomenclatura y declaración para variables y funciones.
  - Reglas para el uso de espacios en blanco, sangría y comentarios.
  - Prácticas y principios de programación.

Beneficios de las convenciones de codificación:
  - Mejorar la legibilidad del código
  - Facilitar el mantenimiento del código
  - Aumentar la productividad del programador
  - Aumentar la calidad del código */

/****************/
/* Comentarios */
/***************/
// Hay dos tipos de comentarios:

// Los comentarios de una línea

/* Los comentarios de varias líneas:
  - Comienzan con una barra inclinada y con un asterisco
  - Terminan con un asterisco y una barra inclinada */

/***************/
/* Sentencias */
/**************/
// Las sentencias son contrucciones sintácticas que realizan acciones.
console.log("Hola");
console.log("Mundo");

/****************/
/* Expresiones */
/***************/
// Una expresión es una combinaciión de valores, variables, operadores o funciones que se evalúa para producr un valor.
console.log(2 + 2);

/*****************************************/
/* Espacios alrededor de los operadores */
/****************************************/
// Los operadores deben tener espacios alrededor de ellos y despupés de las comas. Esto mejora la legibilidad del código.

var x = 2 + 3;

var values = ["a", "b", "c"];

/****************/
/* Indentación */
/***************/
/* Hay dos tipos de indentación:
  - Indentación horizontal (Sangría de código): 2 o 4 espacios.
  - Indentación vertical: líneas vacías para dividir código en bloques lógicos. */

let i = 0;
// => Indentación vertical
while (i < 10) {
  console.log(i); // Indentación horizontal
  // => Indentación vertical
  i++; // Indentación horizontal
}
// => Indentación vertical
console.log(i);

/*********************/
/* Tipos de valores */
/********************/
/* La sintaxis de JavaScript define dos tipos de valores:
  - Los valores fijos, también llamados literales.
  - Los valores dinámicos, también llamados variables. */

// Literales
// => Son los datos que se escriben directamente en el código fuente.
1, "Hola", true, null, [1, 2, 3]; // llamados literales

// Variables
// => Son los valores que se asignan a una variable.
var variable = "valor"; // llamados variables

/*******************************************************/
/* Reglas de nomenclatura para variables y funciones. */
/******************************************************/
// => Las variables y funciones deben usar la notación camelCase. Es decir, la primera palabra debe comenzar con minúscula y las siguientes palabras deben comenzar con mayúscula.

var miVaraible;

function miFuncion() {}

/*****************************/
/* Reglas de la declaración */
/****************************/
/* Reglas generales para declaraciones simples:
  - Declaraciones simples deben ir en una sola línea. */

var numero = 1;

var array = [1, 2, 3];

var obj = { a: 1, b: 2, c: 3 };

/* Reglas generales para declaraciones complejas:
  - Coloque el llave de apertura al final de la primera línea.
  - Use un espacio en blanco antes del llave de apertura.
  - Coloque el llave de cierre en una nueva línea, alineado con la declaración.
  - No use un espacio en blanco antes del corchete de cierre. */

function foo() {}

for (let i = 0; i < 10; i++) {}

if (numero === 1) {
} else {
}

/* Reglas generales para las definiciones de objetos:
  - Coloque el corchete de apertura en la misma línea que el nombre del objeto.
  - Use dos puntos y un espacio en blanco después de cada propiedad.
  - Coloque el corchete de cierre en una nueva línea, sin espacios en blanco. */

var objeto = {
  propiedad: "valor",
};

/*****************/
/* Punto y coma */
/****************/
/* => En JavaScript se puede omitir el punto y coma cuando existe un salto de línea. Se denomina inserción automática de punto y coma. JavaScript interpreta el salto de línea como un punto y coma “implícito” */
var edad = 20;
var correo = "nombre@correo.com";
// => Si la siguiente sentencia es una sentencia comienza con "[", "(", "/", "+", o "-" El punto y coma es obligatorio.
// 1
var entero = 5;

[1, 2, 3][0];

// 2
console.log(entero);

(function bar() {})();

// 3
var test = 0;

/mundo/g.test("Hola mundo");

// 4
var demo = { a: 1 };

-3 + 5;

console.log(demo);

/**********************/
/* Bloques de código */
/*********************/
// => Los bloques de código son construcciones que contienen sentencias agrupadas. Podemos usar esto para aislar un fragmento de código que realiza su propia tarea.
{
  console.log(entero);
}

{
  (function bar() {})();
}
