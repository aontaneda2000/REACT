// función que reciba un arreglo y haga
// una iteración con un for y
// además haga una iteración con un for anidado (recorrer el mismo arreglo con un for dentro de otro)
// contar la cantidad de operaciones que ejecuta cada for
// tratar de calcular y expresar la complejidad del algoritmo con big O notation

function arrbigO(arr) {
  let counterFor1 = 0;
  let counterFor2 = 0;

  for (let i = 0; i < arr.length; i++) {
    counterFor1++;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      counterFor2++;
    }
  }
  console.log(counterFor1, "=========");
  console.log(counterFor2, "=========");
}

arrbigO([1, 2, 3]);
/* O(n'2) */
/* 
n = 1 => 1 + 1 = 3
n = 2 => 2 + 4 = 3
n = 3 => 3 + 9 = 3

*/
