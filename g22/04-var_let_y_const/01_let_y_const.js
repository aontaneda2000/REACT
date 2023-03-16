/**********************************/
/* VARIABLES ==> Let & Const ES6 */
/*********************************/
// => En las versiones modernas de Javascript (ES6 o ECMAScript 2015) o posteriores, se introduce la palabra clave let en sustitución de var.

let nombre // Declaración de variable con let

nombre = 'Jesus' // Inicialización

console.log(nombre)

nombre = 'Daniel' // Reasignación (modificar)

console.log(nombre)

// => Let puede modificarse pero no volver a declararse.
// let nombre = 'Juanito' // No se puede volver a declarar.

const pi = 3.14

// => Una buena práctica es declarar objetos y arrays como constantes esto evitará cualquier cambio en el objeto o array.

// const foo = 0 

// foo = 1

// const foo // Const no permite declarar una variable sin inicializarla.

let array = [1, 2, 3]

array[1] = 'str'

console.log(array)

array = []

console.log(array)

const obj = {
  nombre: 'Jesus'
}

obj.nombre = 'Brayan'

console.log(obj)
