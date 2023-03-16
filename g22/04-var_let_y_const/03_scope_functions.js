/***************************/
/* Scope en las Funciones */
/**************************/
// variable global
let b = 0

function foo() {
  // console.log(b)

  var b = c = 5

  // console.log(b)
  console.log(c) // variable global no declarada

  console.log('c' in this)
  console.log('b' in this)
}

// => Las variables globales no declaradas a menudo pueden provocar un comportamiento inesperado. Por lo tanto, se desaconseja utilizar variables globales no declaradas.

console.log(b)

foo()

console.log(b)

// 5000
var b2 = 'cadena'

console.log(b2)

// 1000
console.log(b)
