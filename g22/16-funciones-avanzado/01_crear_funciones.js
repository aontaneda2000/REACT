/*******************************/
/* Funciones de primera clase: dice recursividad minuto 50

 Es cuando las funciones son tratadas como cualquier tipo de dato porque se comportan como cualquier otro tipo de dato:  
  almacenar en una variale para luegeo ejecutarla
  

*/
/******************************/
const fn = foo;

fn(bar);

function foo(str) {
  console.log("Hola" + " " + str());
}

function bar() {
  return "Soy texto";
}

// Declaración de función:
function a() {
  console.log("Hola");
}

a();

// Expresión de función: almacena una funcion anonima (no tiene nombre)
const c = function () {
  console.log("Hola");
};

/* No puede ser llamada antes de ser creadas */
c();

/*
  f. declaradas vs espresadas

  diferencia es el hoisting 

*/

// Funciones de flecha
const d = () => {
  console.log("Hola");
};

d();

// IIFE (Expresión de función ejecutada inmediatamente)
(function () {
  console.log("Hola");
})();

(() => {
  console.log("hola");
})();

// Función constructora PARA CREAR OBJETOS Y ATRAVES DE PROTOTIPOS SE PUEDE UTILIZAR STR , NUMBER:
function Foo() {
  console.log("Hola");
}

new Foo(); // => Se utiliza para crear nuevos objetos.

new String("Hola");

("Hola");

// => Las funciones son valores. Se pueden asignar, copiar o declarar en cualquier lugar del código. No importa cómo es creada.
