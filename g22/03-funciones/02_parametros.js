/*****************************/
/* FUNCIONES ==> PARÁMETROS */
/****************************/
// => Un parámetro es una variable opcional listada dentro de los paréntesis en la declaración de función.
function sumar(numero1 = 0, numero2 = 0) { // <- parámetros
  console.log(numero1)
  console.log(numero2)
  // console.log(5 + undefined)

  console.log(numero1 + numero2)
}

sumar(5, 5) // => Cuando un valor es pasado a la función cuando esta es llamada, también se denomina argumento.
