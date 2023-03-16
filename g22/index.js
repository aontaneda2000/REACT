function getMultiples(number, limit) {
  // escribe tu solución aquí
  // Recuerda que en esta prueba debes "retornar" el resultado
  // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable multiples
  // return multiples;

  let arrayVacio = [];

  for (let i = 1; i < 10; i++) {
    console.log(20 * i);
  }

  for (let i = number; i < limit; i++) {
    console.log(i);
    console.log(20 * i);

    if (number * i) {
      arrayVacio.push(i);
    }
  }

  console.log(arrayVacio);
}
getMultiples(2, 10);
/* Encuenta los múltiplos de un número

La función getMultiples() recibe como parámetros dos números:

Tu labor es encontrar todos los múltiplos del primer número (sin incluir este número) recibido siempre y cuando sean menores al segundo número recibido.

Ejemplo:
Si la función recibe 20 y 100 deberías retornar un arreglo como el siguiente [40, 60, 80], ya que esos son todos los múltiplos del 20 menores a 100.

*Recuerda utilizar return para devolver tu solución.
*Los números que recibe la función podrán ser dos números cualesquiera. */
function getMultiples2(num1, num2) {
  let multiples = [];
  for (let i = 1; num1 * i < num2; i++) {
    multiples.push(num1 * i);
  }
  return multiples;
}
let multiples = getMultiples2(20, 100);
console.log(multiples); // [40, 60, 80]

let array = [];

for (let i = 1; i < 5; i++) {
  console.log(20 * i);
}
