/*************************************/
/* Estructuras de datos con Objetos */
/************************************/
// => Los objetos son usados para almacenar colecciones de datos y entidades más complejas asociados con un nombre clave y un valor.

var objeto = {} // A esta declaración se llama objeto literal.

var persona = {
  // => Una propiedad es un par de “nombre clave: valor”.
  nombre: 'Jesús',
  apellido: 'Fernández',
  edad: 30,
  'soy una propiedad': true,

  // foo: function () {
  //   return this.nombre + ' ' + this.apellido
  // }

  // Marcadores ${}
  foo() {
    return `${this.nombre} ${this.apellido}`
  }
}

// => Acceder a una propiedad con notación de punto
console.log(persona.edad)

// => Acceder a propiedades con claves de más de una palabra con notación de corchetes
console.log(persona['soy una propiedad'])
console.log(persona['edad'])

var key = 'nombre'
console.log(persona[key])

// => Acceder al método del objeto con notación de punto
console.log(persona.foo())
console.log(persona['foo']())

// => Agregar una nueva propiedad al objeto
persona.correo = 'nombre@correo.com'
console.log(persona)

// => Agregar un nuevo método al objeto
persona.saludar = function () {
  return `Hola soy ${this.nombre}`
}

console.log(persona.saludar())

// => Remover propiedades de un objeto
delete persona['soy una propiedad']

// => El operador in comprueba si existe una propiedad con la clave proporcionada, el nombre de la propiedad a la izquierda de in debe estar entre comillas.
var key2 = 'nombre'

console.log('edad' in persona)

// => Los Objetos son Únicos
var obj = {}

var obj2 = obj

var newObj = {}

console.log(obj === newObj)
console.log(obj2 === obj)
