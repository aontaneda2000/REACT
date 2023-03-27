/******************************************/
/* MÉTODOS EN ARREGLOS ==> ARRAY METHODS */
/*****************************************/
const frutas = ['Manzana', 'Pera', 'Naranja', 'Sandía', 'Melón', 'Pera']
//                  0         1        2          3        4        5

// .indexOf(elemento, indíce) – busca el elemento comenzando desde el indíce, y devuelve el indíce donde fue encontrado, de otro modo devuelve -1.
console.log(frutas.indexOf('Pera'))
console.log(frutas.indexOf('Mango'))
console.log(frutas.indexOf('Naranja'))
console.log(frutas.indexOf('Pera', 2))

// .lastIndexOf(elemento, indíce) – igual que el anterior, pero busca de derecha a izquierda.
console.log(frutas.lastIndexOf('Pera'))
console.log(frutas.lastIndexOf('Pera', 4))
console.log(frutas.lastIndexOf('Uva'))

// .includes(elemento, indíce) – busca comenzando desde el índice, devuelve un boleano true/false.
console.log(frutas.includes('Fresa'))
console.log(frutas.includes('Pera'))
console.log(frutas.includes('Pera', 4))
console.log(frutas.includes('Pera', 6))

const arr = [NaN]

console.log(frutas.indexOf('Pera') != -1)
console.log(frutas.indexOf('Uva') != -1)

console.log(arr.indexOf(NaN) != -1)
console.log(arr.includes(NaN))

// .toString() - convierte un arreglo en una cadena de texto string (separado por comas).
console.log(frutas.toString())

// .join(glue) - se comporta igual que toString, pero además puede especificar el separador
console.log(frutas.join(' '))

// .reverse() - ordena el array de forma inversa y lo devuelve.
const numeros = [1, 2, 3, 4, 5]

console.log(numeros.reverse())

// .push() - Agrega el elemento al final del array
frutas.push('Uva', 'Kiwi')
// frutas[frutas.length] = 'Platano'
console.log(frutas)

// .pop() - Extrae el último elemento del array y lo devuelve
const kiwi = frutas.pop()
console.log(frutas)
console.log(kiwi)

// .shift() - Extrae el primer elemento del array y lo devuelve
const manzana = frutas.shift()
console.log(frutas)
console.log(manzana)

// .unshift() - Agrega el elemento al principio del array
frutas.unshift(manzana, 'Mango')
console.log(frutas)

// => Otros métodos:
// .concat(...elementos) - devuelve un nuevo arreglo con todos los elementos actuales y agrega otros arreglos
const a = [1, 2, 3]
const b = [4, '5', 6]
const c = [7, 8, null]

console.log(b.concat(0, a, 10, c))

// .splice(desde, cuantos) - desde (la posición) borra (cuántos elementos) e inserta nuevos elementos.
const estudiantes = ['Luis', 'Pedro', 'Juan', 'María', 'Ana']
//                     0        1        2       3       4

console.log(estudiantes.splice(1, 1, 'Miguel'))
console.log(estudiantes)

console.log(estudiantes.splice(1, 0, 'Brayan', 'Lucas'))
console.log(estudiantes)

// .slice(indíceInicial, indíceFinal) - crea un nuevo array y copia elementos desde la posición desde / hasta en el nuevo array, no incluye el final.

const copy = estudiantes.slice()
console.log(copy)
console.log(estudiantes.slice(0, 2))
console.log(estudiantes.slice(-1))
console.log(estudiantes.slice(-2))

// .sort() - ordena el array y lo devuelve
const strArray = ['tierra', 'agua', 'fuego', 'aire']
console.log(strArray.sort())

const obj = [{ e: 34 }, { e: 12 }, { e: 9 }, { e: 7 }, { e: 50 }]

console.log(obj.sort(function (obj1, obj2) {
  return obj1.e - obj2.e
}))

const numbers = [4, 12, 9, 7, 50]

console.log(numbers.sort(function (num1, num2) {
  return num1 - num2
}))
