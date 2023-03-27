/*************/
/* NO (NOT) */
/************/
// => NOT es representado con un signo de exclamación !

/* El operador acepta un solo argumento y realiza lo siguiente:
  - Convierte el operando al tipo booleano: true/false.
  - Retorna el valor contrario. */

console.log(!true)
console.log(!false)

const data = {}

if (!data) console.log('oye la informacion no ah llegado')

console.log(data)

// Not con otros tipos de datos
console.log(!1)
console.log(!0)
console.log(!'')

// => Un doble NOT !!
console.log(Boolean(1))
console.log(Boolean(0))

console.log(!!1)
console.log(!!0)
// => El primer NOT convierte el valor a booleano y retorna el inverso, y el segundo NOT lo invierte de nuevo.

// => La precedencia de NOT es la mayor de todos los operadores lógicos, antes de AND y OR.
console.log(true && false || !true)
console.log(false || false)
