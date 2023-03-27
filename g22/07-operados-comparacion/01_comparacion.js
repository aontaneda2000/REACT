/****************/
/* COMPARACIÓN */
/***************/
/* En JavaScript se escriben así:

Operadores relacionales:
  - mayor que >
  - menor que <
  - mayor o igual que >=
  - menor o igual que <=

Operadores de igualdad:
  - igual a == => ===
  - diferente de != => !== */

// => Los operadores de comparacion retornan un valor booleano.
console.log(5 > 2)
console.log(5 < 2)
console.log(5 <= 2)
console.log(5 >= 2)
console.log(5 == 2)
console.log(5 != 2)

// Comparando cadenas
console.log('a' > 'z')
console.log('Z' < 'a')

console.log('a'.codePointAt())
console.log('Z'.codePointAt())

console.log('a'.codePointAt().toString(16)) // 0x0061
console.log('Z'.codePointAt().toString(16)) // 0x005a

console.log('tierna' >= 'tierra')
console.log('t' >= 't')
console.log('i' >= 'i')
console.log('e' >= 'e')
console.log('r' >= 'r')
console.log('n' >= 'r')

console.log('n'.codePointAt())
console.log('r'.codePointAt())

console.log('z' > 'a')

// comparacion de diferentes tipos
// => Las comparaciones relacionales y de igualdad convierten valores utilizando la conversión numérica.
console.log(5 < '6')
console.log('5' < '1000')
console.log(true < false) // 1 | 0
console.log(true > false)
console.log(true == 1)
console.log(0 == false)

// => Operadores de igualdad con null y undefined, existe una regla especial, son iguales entre sí, pero no a ningún otro valor.
console.log(undefined == null)
console.log(undefined == undefined)
console.log(null == null)
console.log(null == undefined)

console.log(null == true)
console.log(null == 0)
console.log(null == 'sdfsd')
console.log(null == '0')
console.log(undefined == '0')
console.log(undefined == true)
console.log(undefined == false)
console.log(undefined == NaN)

// => Operadores relacionales con null y undefined se convierten en números: null se convierte en 0, mientras que undefined se convierte en NaN.
console.log(null < 1)
console.log(null <= 0)
console.log(undefined < 1)
console.log(undefined < 0)
console.log(undefined <= 0)
console.log(undefined >= 0)

// Resultado extraño:
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// Igualdad estricta, compara el tipo y el valor.
console.log(5 === '5')
console.log(5 !== '5')
