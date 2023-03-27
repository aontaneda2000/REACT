/******************************************/
/* MÉTODOS EN OBJETOS ==> OBJECT METHODS */
/*****************************************/
// => Los métodos son funciones que se asocian a un objeto.
const persona = {
  nombre: 'Daniel',
  apellido: 'Garcia',
  edad: 25
}

// .entries() Devuelve un array que contiene todos los pares [key, value] de las propiedades enumerables en formato cadena de texto que le pertenecen a un objeto dado.
console.log(Object.entries(persona))

const personaArray = Object.entries(persona)

// .keys() Devuelve un array que contiene todas las claves de las propiedades enumerables de un objeto dado.
console.log(Object.keys(persona))

// .values() Devuelve un array que contiene todos los valores de las propiedades enumerables de un objeto dado.
console.log(Object.values(persona))

// .fromEntries() Devuelve un nuevo objeto de los pares iterables [key, value]. (Este método hace lo contrario a Object.entries).
console.log(personaArray)
console.log(Object.fromEntries(personaArray))

// .assign(newObj, obj) Asigna una o más propiedades de un objeto a un objeto destino.
const obj2 = {}

Object.assign(obj2, persona, { nombre: 'Juan' })

console.log(obj2)

// .freeze() Congela un objeto. Otro código no puede borrar ni cambiar sus propiedades.
Object.freeze(obj2)

obj2.nombre = 'Brayan'

console.log(obj2)

// .isFrozen() Devuelve un booleano que indica si un objeto está congelado.
console.log(Object.isFrozen(persona))
console.log(Object.isFrozen(obj2))

const obj1 = {
  a: 1,
  b: 2,
  c: 3
}

const obj3 = {
  a: 1,
  b: 2,
  d: 4
}

console.log(obj1.d = obj3.d)

console.log(obj1)
