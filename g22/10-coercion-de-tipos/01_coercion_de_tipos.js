/***********************/
/* COERCIÓN DE TIPOS */
/*********************/
// => En JavaScript, la coerción es una característica que fuerza a una variable de cierto tipo a tener el comportamiento de una diferente.

// => implícita
// Cadena 
console.log(1 + '2') // 12
console.log('1' + 2) // 12
console.log('Hola ' + 'Mundo')
console.log('Esto es ' + true)

// Números
console.log(24 / '2')
console.log('15' - '5')
console.log('2' * 10)

// NaN
console.log('dos' * 5)

// null = 0
console.log(1 / null)
console.log(1 / 0)
console.log(null + 2)
console.log(0 + 2)
console.log(null < 1)
console.log(0 < 1)

// undefined
console.log(undefined + 2)
console.log(undefined * 2)
console.log(undefined / 2)

// Booleanos
console.log(true + true)
console.log(1 + 1)
console.log(true + false)
console.log(1 + 0)

// Explícita
// con cadena
console.log(1 + '2') // 12
console.log(1 + parseInt('2')) // 12
console.log(1 + Number('2')) // 12
console.log(1 + +'2') // 12
console.log(typeof +'2')

console.log(Number('2'))
console.log(Number(true))
console.log(Number(false))
console.log(Number(null))
console.log(Number(undefined))
console.log(Number([]))
console.log(Number({}))

console.log(+'2')
console.log(+true)
console.log(+false)
console.log(+null)
console.log(+undefined)
console.log(+[])
console.log(+{})

console.log(parseInt('2'))
console.log(parseInt('25px'))
console.log(parseInt('25 mxn'))

// con booleanos
// falsys
/* 
false
0
''
NaN
null
undefined
*/

const estudiantes = [{ nombre: 'Juan', active: true }, { nombre: 'Luis', active: null }]

for (let estudiante of estudiantes) {
  if (estudiante.active) {
    console.log(estudiante)
  }
}

if (true) {
  console.log('que esto se va mostrar')
}

// truthys
