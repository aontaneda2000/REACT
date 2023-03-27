// Ejercicios usando metodos de arreglos

// 1. ¿Cual es el el método para eliminar el ultimo elemento de un arreglo?
// respuesta: pop()
const numeros = [1, 2];
const ultimoElemento = numeros.pop();
console.log(numeros);

// 2. ¿Cual es el método para eliminar el primer elemento de un arreglo?
// respuesta:
const numeros2 = [1, 2];
const primerElemento = numeros2.shift();
console.log(numeros2);

// 3. ¿Cual es el método para eliminar un elemento en una posicion especifica de un arreglo?
// respuesta: splice()
const numeros3 = ["Futbol", 2, 3, 4];
numeros3.splice(0, 1);
console.log(numeros3);

// 4. ¿Cual es el método para agregar un elemento al final de un arreglo?
// respuesta:

const nums4 = ["Futbol", 2, 3, 4];
nums4.push("Nuevo elemento al final");
console.log(nums4);

// 5. ¿Cual es el método para agregar un elemento al inicio de un arreglo?
// respuesta: unsfhit()

// 6. ¿Cual es el método para copiar un arreglo?
// respuesta: slice()

// 7. Utiliza los metodos de arreglos para invertir la siguiente frase
const str = "Me gusta programar en JavaScript";

console.log(str.split(" ").reverse().join(" "));

// 8. Utiliza los metodos de arreglos para ordenar el siguiente arreglo de usuarios por edad de menor a mayor
const users = [
  { name: "Luis", age: 25 },
  { name: "Pedro", age: 30 },
  { name: "Juan", age: 20 },
  { name: "Maria", age: 28 },
  { name: "Ana", age: 32 },
  { name: "Mariana", age: 27 },
  { name: "Jorge", age: 22 },
];
const edadOrdenada = users.sort(function (a, b) {
  return a.age - b.age;
});
console.log(edadOrdenada);

// 9. Utiliza los metodos de arreglos para ordenar la siguiente lista de palabras
const palabras = ["hola", "como", "estas", "bien", "y", "tu"];

const ordenar = palabras.sort();
console.log(ordenar);

// 10. Utiliza los metodos de arreglos para sumar dos arreglos
const a = [1, 2, 3];
const b = [4, 5, 6];

const newArray = a.concat(b);
console.log(newArray);

let contador = 0;

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
  contador = contador + newArray[i];
}

console.log(contador);
