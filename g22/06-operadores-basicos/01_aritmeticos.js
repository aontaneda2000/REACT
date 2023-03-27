/****************/
/* ARITMÉTICOS */
/***************/
/* Términos: “unario”, “binario”, “operando”
  - Un operando – es a lo que se aplican los operadores.
  - Un operador es unario si tiene un solo operando.
  - Un operador es binario si tiene dos operandos. */

// => Operadores aritméticos:
// suma o adición
console.log(2 + 2) // 4

// resta
console.log(5 - 3)

// multiplicación
console.log(2 * 2)

// división
console.log(2 / 2)

// módulo o residuo
// El residuo de la división entera. 
console.log(13 % 4)
console.log(19 % 4)

// División exacta
console.log(12 % 4)
console.log(8 % 2)

function isPar(num) {
  return num % 2
}

console.log(isPar(1))
console.log(isPar(2))
console.log(isPar(3))
console.log(isPar(4))

// Exponenciación
console.log(2 * 2)
console.log(2 * 2 * 2)
console.log(2 * 2 * 2 * 2)
console.log(2 * 2 * 2 * 2 * 2)

console.log(2 ** 2)
console.log(2 ** 3)
console.log(2 ** 4)
console.log(2 ** 5)

// => Más de un operador en una misma línea
console.log((2 + 2) * 2) // 6 Los paréntesis anulan cualquier precedencia.

// => Si una expresión tiene más de un operador, el orden de ejecución se define por su precedencia o, en otras palabras, el orden de prioridad predeterminado de los operadores. Si la precedencia de los operadores es la misma, el orden de ejecución es de izquierda a derecha.

// => Operadores Unarios, aumentar (Incremento++) o disminuir (Decremento--) un número en uno, es una de las operaciones numéricas más comunes.
let contador = 1
// contador++ // sufijo 2
// contador++
// contador++
// contador++

// ++contador // prefijo 3
// ++contador
// ++contador
// ++contador

const pre = ++contador
console.log(pre) // prefijo

const suf = contador++
console.log(suf) // sufijo

console.log(contador)

let count = 10
count-- // sufijo
count--
count--
count--

--count // prefijo
--count // prefijo
--count // prefijo
--count // prefijo
console.log(count)

// console.log(--10) // El operador unario ++ sólo puede ser aplicado a variables.
