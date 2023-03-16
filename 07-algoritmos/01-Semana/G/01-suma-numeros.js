const sum = (n) => {
  // 1 y  2
  let contador = 0;

  for (let i = 1; i <= n; i++) {
    console.log(i);
    contador = contador + i;
  }
  // 3
  console.log(contador);
};
sum(4);

// complejidad = n + 3
// n son las iteraciones cantidad de veces que se ejecuta mi algoritmo y 3 son los pasos

/* cuantos pasos va a tener mi algoritmo para calcular la complejidad */

function sum2(n) {
  const sum = (n * (n + 1)) / 2;
  return sum;
}

// 1 -> n+3
// 2 -> 1

/* Complejidad de algoritmo 1
 Representado por O  y n que es la parte dominante */
// O(n)

// cantidad de operaciones que se tiene que realizar

/* EJERCICIO 1 */

// función que reciba un arreglo y haga
// una iteración con un for y
// además haga una iteración con un for anidado (recorrer el mismo arreglo con un for dentro de otro)
// contar la cantidad de operaciones que ejecuta cada for
// tratar de calcular y expresar la complejidad del algoritmo con big O notation

const forBig = (arr) => {
  let counter = 0;
  let counter2 = 0;

  for (let i = 0; i < arr.length; i++) {
    counter += i;
    console.log(i);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      counter2 += i;
    }
  }
  console.log(counter, counter2);
};
forBig([2, 3, 3]);

/*
COMPLEJIDAD DEL ALGORITMO: La parte dominante es el segundo bloque for por lo tanto como tiene un bucle anidado seria n'2 

n + n'2 + 3 
n = 1 -> 1+1 + 3
n = 2 -> 2+4 + 3

o(n'2)

*/

/* ejercicio 2 3 bucles en su interior



O(n'3)
*/
