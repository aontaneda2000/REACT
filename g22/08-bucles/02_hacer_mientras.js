/******************************/
/* HACER MIENTRAS (DO WHILE) */
/*****************************/
// => El bucle “do…while” es una variante del bucle “while”.

// => A diferencia de while primero ejecuta el cuerpo y luego comprueba la condición, mientras esta se cumpla, el cuerpo se ejecuta una y otra vez.

let a = 1

do {
  console.log(a)

  a++
} while (false)

console.log(a)

let b = 1

while (false) {
  console.log(b)
  b++
}

console.log(b)

const arr = [{ n: 'a', e: 20 }, { n: 'b', e: 18 }, { n: 'c', e: 26 }]

let i = 0

do {
  console.log(arr[i].e)

  i++
} while (i < arr.length)
