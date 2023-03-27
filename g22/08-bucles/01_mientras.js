/*********************/
/* MIENTRAS (WHILE) */
/********************/
// => Los bucles, ciclos o loops son controles de instrucciones que nos permiten determinar el número de veces que se va a ejecutar una instrucción.

// => While crea un bucle que ejecuta una instrucción especificada mientras cierta expresión o condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la instrucción.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//           0  1  2  3  4

let i = 0

// console.log(arr[i])
// i++
// console.log(arr[i])
// i++
// console.log(arr[i])
// i++
// console.log(arr[i])
// i++
// console.log(arr[i])

while (i < arr.length) {
  console.log(arr[i])
  i++
}

let n = 5

while (n <= 10) {
  console.log(n) // interación
  n++
}

let y = 5

// 0 = false
while (y) {
  console.log(y)
  y--
}
