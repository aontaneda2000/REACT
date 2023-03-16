/*****************************/
/* VARIABLES ==> Ejercicios */
/****************************/
// 1. Define una variable llamada nombre y asígnale tu nombre. Muestra su valor por pantalla de tal forma que el resultado del programa sea el mismo que en el siguiente ejemplo:
// => Mi nombre es Daniel
let nombre = "Aaron";

console.log(`Hola mi nombres es ${nombre}`);

// 2. ¿Qué es el hoisting?
/* Es la elevacion de funciones declaradas y la variable declarada con var que cuando var se eleva se le inicializa undefined  */

// 3. ¿Cuál es el resultado de las siguientes expresiones?
let a = 1;
a = 2;
console.log(a); // 2

console.log(b); // undefined
var b;

const c = 1;
//  c = 2
console.log(c); //error assignment

// 4. ¿Cuál es el scope de las siguientes variables?
var x = 1; //Ambito global / Ambito a nivel de funcion (encerrarlo en una funcion)
let y = 2; // ambito de bloque
const z = 3; // ambito de bloque

// R: Declaraciones de ambito global porque podemos acceder a ellas desde cualquier parte del codigo
{
  console.log(x);
  console.log(y);
  console.log(z);
}
function Mifuncion() {
  console.log(x);
  console.log(y);
  console.log(z);
}
Mifuncion();

// 5. ¿Cuál es es la diferencia entre var, let y const?

// Scope y hosting

// R:
// var
// 1. Permite reasignar el valor de una variable
var nombre1 = 1;
nombre1 = 2;
// 2. Permite re declarar el valor de una variable con la palabra reservada.
var nombre1 = 2;
// 3. Permite "crear" o "declarar" la variable sin inicializarla
var nombre1;

// let
// 1. Permite reasignar el valor de una variable
let apellido1 = 1;
apellido1 = 2;
// 2. Permite "crear" o "declarar" la variable sin inicializarla
let apellido2;
// 3. No permite re declarar el valor de una variable con la palabra reservada.
// let apellido1 = 2 // error

// const
// 1. No permite declarar una constante sin inicializarla
// const edad; error
// 2. No permite reasignacion de la constante
const edad = 22;
// edad = 21 // error

// 6. Define una variable llamada frutas y asígnale un array con los siguientes valores: 'manzana', 'platano', 'pera', 'naranja', 'mango'. Muestra el valor de la primera fruta del array por pantalla.

let frutas = ["manzana", "platano", "pera", "naranja", "mango"];

console.log(frutas[0]);

// 7. ¿Qué es el scope de las variables?
// Es el alcance que tiene las variables

// 8. Define una variable persona y asígnale un objeto con las siguientes propiedades: nombre, edad, género, intereses (como array), agrega tu nombre, edad, género y algunos intereses a la variable persona. Muestra por pantalla el mensaje 'Hola, me llamo [tu nombre] tengo [tu edad] años, me gusta [tus intereses]'.
let persona = {
  nombre: "Aaron",
  edad: 22,
  genero: "Masculino",
  intereses: ["Futbol", "Calistenia"],
  mensaje() {
    console.log(
      `Hola me llamo ${this.nombre} tengo ${this.edad} años, me gusta el ${this.intereses["0"]} y la ${this.intereses[1]}`
    );
  },
};

persona.mensaje();

// 9. ¿Cuál es el resultado de las siguientes expresiones?
// const obj = { a: 1 };
// const key = "a";
// console.log(obj[key]); // 1

const obj1 = { a: 1 };
const key1 = "b";
console.log(obj1); //undefined

const obj = { a: 1 };
const key = "a";
obj[key] = 2;
console.log(obj[key]); // 2

// 10. ¿Cuál es el resultado de las siguientes expresiones?
// const arr = ['a', 'b', 'c']
// console.log(arr[arr.length - 1]) // c devuelve el ultimo elemento del array
