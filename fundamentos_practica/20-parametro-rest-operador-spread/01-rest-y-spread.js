/**************************************/
/* REST & SPREAD ==> Parámetros Rest */
/*************************************/

/* Una función puede ser llamada con cualquier número de argumentos sin importar cómo sea definida. */
function suma (a, b) {
  console.log(arguments)
  for (const num of arguments) {
    console.log(num)
  }
  /* Pero la desventaja es que a pesar de que arguments es símil-array e iterable, no es un array. No soporta los métodos de array, no podemos ejecutar arguments.map(...) por ejemplo. */
  return a + b
}
/* Aquí no habrá ningún error por “exceso” de argumentos. Pero, por supuesto, en el resultado solo los dos primeros serán tomados en cuenta. */
console.log(suma(1, 2, 3, 4, 5)) // 3

/* Los parámetros pueden ser referenciados en la definición de una función con 3 puntos ... seguidos por el nombre del array que los contendrá. Literalmente significan “Reunir los parámetros restantes en un array”. */
function sumaRest (...rest) {
  console.log(rest)
  let suma = 0
  for (const num of rest) {
    suma += num
  }
  return suma
}
console.log(sumaRest(1, 2, 3, 4, 5)) // 15

/* Podemos elegir obtener los primeros parámetros como variables, y juntar solo el resto. */
function mostrarNombre (nombre, apellido, ...rest) {
  console.log(rest)
  return `${nombre} ${apellido}`
}

console.log(mostrarNombre('Jesús', 'Fernández', 30, 'js@email.com', 'México')) // Jesús Fernández

/**************************************/
/* REST & SPREAD ==> Operador Spread */
/*************************************/
/* Acabamos de ver cómo obtener un array de la lista de parámetros. Pero a veces necesitamos hacer exactamente lo opuesto. */

/* Por ejemplo, existe una función nativa Math.max que devuelve el número más grande de una lista: */
console.log(Math.max(1, 2, 3, 4, 5)) // 5

/* Ahora bien, supongamos que tenemos un array de números: */
const numeros = [1, 2, 3, 4, 5]

/* ¿Cómo ejecutamos Math.max con él? */
const resultado = Math.max(numeros)
/* Pasando la variable no funcionará, porque Math.max espera una lista de argumentos numéricos, no un único array: */
console.log(resultado) // NaN

/* Y seguramente no podremos listar manualmente los ítems del arreglo, porque tal vez no sepamos cuántos son. ¡Operador Spread al rescate! Es similar a los parámetros rest, también usa ..., pero hace exactamente lo opuesto. */

/* Cuando ...arr es usado en el llamado de una función, “expande” el objeto iterable arr en una lista de argumentos. */

/* También podemos pasar múltiples iterables de esta manera: */
const masNumeros = [7, 8, 9, 10]
/* Incluso podemos combinar el operador spread con valores normales: */
console.log(0, ...numeros, 6, ...masNumeros) // 0 1 2 3 4 5 6

/* Además, el operador spread puede ser usado para combinar arrays: */
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
console.log([...arr1, ...arr2]) // [1, 2, 3, 4, 5, 6]

const vector = [1, 2, 3]
const vector2 = [4, 5, 6]

let sumar = 0
for (const num of [...vector, ...vector2]) {
  sumar += num
}
console.log(sumar)

/* En los ejemplos de arriba utilizamos un array para demostrar el operador spread, pero cualquier iterable funcionará también. Por ejemplo, aquí usamos el operador spread para convertir la cadena en un array de caracteres: */
console.log([...'Javascript']) // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

/* Para esta tarea en particular también podríamos haber usado Array.from, ya que convierte un iterable (como una cadena de caracteres) en un array: */
console.log(Array.from('Javascript')) // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

/* El resultado es el mismo. Pero hay una sutil diferencia entre Array.from() y [...spread]:
  - Array.from opera con símil-arrays e iterables.
  - El operador spread solo opera con iterables.
Por lo tanto, para la tarea de convertir algo en un array, Array.from tiende a ser más universal. */

/* Copia de un objeto array */
const arr = [1, 2, 3]
/* ¿Recuerdas acerca de copiar un arreglo sin alterar el original con slice anteriormente? */
const copia = arr.slice()
console.log(copia)

/* Es posible hacer lo mismo con la sintaxis de spread: */
const copia2 = [...arr]
console.log(copia2)

/* Nota que es posible hacer lo mismo para hacer una copia de un objeto: */
const obj = { a: 1, b: 2, c: 3 }
const copia3 = { ...obj }
console.log(copia3) // {a: 1, b: 2, c: 3}

/* Esta manera de copiar un objeto es mucho más corta que el Object.assign() */
