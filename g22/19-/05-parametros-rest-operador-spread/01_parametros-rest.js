/********************/
/* Parámetros Rest */
/*******************/
const sumar = (a, b, c, ...numeros) => {
  let suma = 0
  for (let num of numeros) {
    console.log(num)
    suma += num
  }

  console.log(numeros)

  return a + b + c
}

const result = sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(result)