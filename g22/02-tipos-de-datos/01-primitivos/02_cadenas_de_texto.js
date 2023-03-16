/*********************/
/* Cadenas de Texto */
/********************/
// => El tipo string representa cadenas de texto o caracteres entre comillas.

// => Hay tres tipos de comillas:
console.log('Cadena de texto con comillas simples')
console.log("Cadena de texto con comillas dobles")
console.log(`Cadena de texto con comillas invertidas`)

var nombre = 'Jesús'
var apellido = 'Fernández'

console.log(nombre, apellido)

// => Concatenación de cadenas con el operador +
var nombreCompleto = nombre + " " + apellido

console.log(nombreCompleto)

console.log('Soy una "cadena de texto"')
console.log("Soy una 'cadena de texto'")

// => Caracter de escape \
console.log("Soy una \"cadena de texto\"")

// => Salto de línea
console.log('Esto realizará \n un salto de línea')

// => Template literals o template strings
console.log(`"Soy una '' "cadena de texto"`)

console.log(`Lista: 
Item 1
Item 2
Item 3`)

var result = `El resultado de la operación de 4 + 5 es ${4 + 5}`

console.log(typeof result)

console.log('El resultado de la operación de 4 + 5 es', 4 + 5)
console.log(`El resultado de la operación de 4 + 5 es ${4 + 5}`)

// => Los caracteres tienen un indíce numérico y se empiezan a contar desde 0.
var str = 'Hola como estan'

/* Las cadenas de texto son estructuras iterables
=====================================================
  H  o  l  a     c  o  m  o      e   s   t   a   n
  0  1  2  3  4  5  6  7  8  9  10  11  12  13  14 + 1
===================================================== */

// Indíces
console.log(str[5])

// La propiedad length
console.log(str.length)

console.log('lasquinceletras'.length)

// Total de indíces: 14
// Total de caracteres: 15

var xv = 'lasquinceletras'
console.log(xv[xv.length - 1])

// => Los strings son inmutables, no se pueden modificar.
xv[0] = 'L'

console.log(xv)

console.log(typeof xv)

// var arr = ['a', 'b', 'c']
// //          0    1    2
// arr[0] = 'x'

// console.log(arr[0])

// console.log(arr)

