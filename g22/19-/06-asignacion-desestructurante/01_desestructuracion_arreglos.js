/****************************************************/
/* DESTRUCTURING ==> desestructuración de Arreglos */
/***************************************************/
/* La asignación desestructurante es una sintaxis especial que nos permite “desempaquetar” arrays u objetos en varias variables, ya que esto a veces es más conveniente. */

const persona = ["Jesus", "Fernandez", "Colli"];

// SIN DESTRUCTURACION=>

// const nombre = persona[0]
// const apellido = persona[1]
// console.log(nombre, apellido)

// ========= DESTRUCTURACION CON ARREGLOS =========
// IMPORTA EL ORDEN PARA ACCEDER AL VALOR
const [nombre, , apellido2] = persona;

console.log(nombre, apellido2);

const frutas = [
  "manzana",
  "pera",
  "naranja",
  "plátano",
  "uva",
  "melon",
  "fresa",
];

// OBTIENE TRES INDICES Y DESPUES EL RESTO DE INDICES
const [mz, , na, ...restoDeFrutas] = frutas;

console.log(mz);
console.log(na);

console.log(restoDeFrutas);
