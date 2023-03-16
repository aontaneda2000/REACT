/*************************************/
/* MÉTODOS EN PRIMITIVOS ==> NUMBER */
/************************************/

// => Funciones Globales
// Para convertir una cadena a un número se utiliza la función parseInt()
const int = "45";
console.log(parseInt(int) + 58);

// Para números de punto flotante se utiliza la función parseFloat()
const float = "10.5";
console.log(parseFloat(float) + 9.5);

// => Metodos de Number
// toFixed() Redondea un número a una cantidad de decimales especificada.
const operation = 0.1 + 0.2;
console.log(operation.toFixed(1));

// => El objeto Math tiene propiedades y métodos para constantes y funciones matemáticas.
console.log(Math.PI);

// => Métodos
// El método Math.round() Redondea hacia el entero más cercano:
console.log(Math.round(10.5));

// El método Math.ceil() Redondea hacia el entero más alto:
console.log(Math.ceil(10.2));

// El método Math.floor() Redondea hacia el entero más bajo:
console.log(Math.floor(10.2));

// El método Math.min() Devuelve el valor más pequeño de una lista de números:
console.log(Math.min(3, 23, 67, 1, 45));

// El método Math.max() Devuelve el valor más grande de una lista de números:
console.log(Math.max(3, 23, 67, 1, 45));

// El método Math.random() Devuelve un número aleatorio entre 0 y 1:
console.log(Math.floor(Math.random() * 10) + 1);

// El método Math.trunc() Remueve los decimales de un número:
console.log(Math.trunc(Math.PI));
