/******************************************/
/* FUNCIONES ==> DECLARACIÓN DE FUNCIÓN */
/****************************************/
// => Las funciones son un conjunto de instrucciones que realizan una tarea o calculan un valor y pueden ser reutilizadas.

// var nombre = 'Juan'
// var nombre2 = 'Carlos'

// var saludo = 'Hola como estas'

// console.log(saludo + ' ' + nombre)
// console.log(saludo + ' ' + nombre2)

// => Declaración de función
function saludar(nombre) {
  console.log(`Hola ${nombre} como estas `)
}

// => Definir una función no la ejecuta.

// => Llamada a la función
var resultado = saludar('Juan')

// => Una función que no devuelve nada siempre retorna undefined.
console.log(saludar('Juan'))


