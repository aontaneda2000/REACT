/************************/
/* OPERADOR TERNARIO ? */
/***********************/
// => El operador ternario es una forma de escribir una condición en una sola línea. Equivalente a If/else, método abreviado.

const edad = 5

let permiso = (edad >= 18) ? 'Si tiene permiso para conducir' : 'No tiene permiso para conducir'

// if (edad >= 18) {
//   permiso = 'Si tiene permiso para conducir'
// } else {
//   permiso = 'No tiene permiso para conducir'
// }

console.log(permiso)

// Múltiples condicionales
const a = 15
const b = 15

// if (a < b) {
//   console.log(`${a} es menor que ${b}`)
// } else if (a > b) {
//   console.log(`${a} es mayor que ${b}`)
// } else {
//   console.log(`${a} es igual que ${b}`)
// }

const resultado = (a < b) ? `${a} es menor que ${b}` :
  (a > b) ? `${a} es mayor que ${b}` :
    `${a} es igual que ${b}`

console.log(resultado)
