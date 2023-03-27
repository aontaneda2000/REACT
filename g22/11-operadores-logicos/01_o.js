/***********/
/* O (OR) */
/**********/
// => Aunque sean llamados lógicos, pueden ser aplicados a valores de cualquier tipo, no solo booleanos. El resultado también puede ser de cualquier tipo.

/* Hay cuatro operadores lógicos en JavaScript:
  - || OR
  - && AND
  - ! NOT
  - ?? NULLISH COALESCING */

// => OR se representa con dos símbolos de línea vertical ||

console.log(2 || 5)

// => Hay 4 combinaciones lógicas posibles:
console.log(true || true)
console.log(false || true)
console.log(true || false)
console.log(false || false)

console.log(0 || '' || NaN || undefined || null) // 2

const nombre = null
const apellido = 'Montero'
const nombreUsuario = null

// => El primer valor verdadero
console.log(nombre || apellido || nombreUsuario || 'Anónimo')

// evalua izq a der y convierte a booleano si es true regresa el valor original y si todos dan false regresa el ultimo valor.
