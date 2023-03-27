/************/
/* For..of */
/***********/
// => for... of itera sobre los valores de un objeto iterable. Es muy útil para recorrer arreglos.
const array = ["a", "b", "c"];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// No permite poner una inicializacion o condicion en ell bucle
for (let letter of array) {
  console.log(letter);
}

for (let letter of "hola") {
  console.log(letter);
}
const miArray = ["a", "b", "c"];

for (const [indice, valor] of miArray.entries()) {
  console.log(`El elemento en el índice ${indice} es ${valor}`);
}

const users = [{ c: "juan@coreo.com" }, { c: "maria@coreo.com" }];

const nuevoArreglo = [];

for (let user of users) {
  nuevoArreglo.push(user.c);
}

console.log(nuevoArreglo);

// Ejemplo de uso de for... of con un objeto iterable:
const estudiantes = [
  { n: "a", active: true, tasks: {} },
  { n: "b", active: false, tasks: {} },
  { n: "c", active: true, tasks: null },
  { n: "d", active: false, tasks: null },
  { n: "e", active: true, tasks: {} },
];

/* Encontrar usuarios que esten activos y usuarios que hayan entregado la tarea */
let contar = 0;
for (const estudiante of estudiantes) {
  if (estudiante.active) {
    if (estudiante.tasks) {
      contar++;
    }
  }
}

console.log(contar);

/************/
/* For..in */
/***********/
// => Para recorrer todas las claves de un objeto existe una forma especial de bucle: for..in.
const obj = { a: 1, b: 2, c: 3 };

console.log(obj["a"]);

for (const llave in obj) {
  console.log(llave); // llaves
  console.log(obj[llave]); // valores
}

// Ejemplo de uso de for... in con un objeto iterable:
/* Numero que mas alto del objeto */
const frutas = { manzana: 15, pera: 2, uva: 8, naranja: 1, limon: 6 };

let max = 0;
let laFruta;
for (const fruta in frutas) {
  console.log(frutas[fruta]);
  console.log(fruta);
  if (frutas[fruta] > max) {
    max = frutas[fruta];
    laFruta = fruta;
  }
}

console.log(laFruta);
console.log(max);

// No usar for in para arreglos
// for (let letter in array) {
//   console.log(array[letter])
// }
