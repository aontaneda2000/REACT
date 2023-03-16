/***********************************/
/* FUNCIONES ==> DIRECTIVA RETURN */
/**********************************/
// => Una función puede devolver un valor al código de llamada como resultado con la directiva return.
function sumar(a, b) {
  var operacion = a + b

  return operacion
}

var result = sumar(5, 5)
var result2 = sumar(4, 2)

console.log(result)
console.log(result2)

function doble(num) {
  return num * 2
}

var resultado = doble(result)
var resultado2 = doble(result2)

console.log(resultado)
console.log(resultado2)

// test
// console.log(result == 9)