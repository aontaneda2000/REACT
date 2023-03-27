/* Inteo  a algoritmos
- Algoritmo
    Es una Serie de pasos finita para resolver un problema
    

- En las entrevistas se enfoca en los algoritmos ya que dicho algoritmo va a ser calculado por el tiempo
- En cuantos pasos se va a ejecutar mi algoritmo para poder calcular la complejidad

- N es la cantidad de iteraciones y El return se puede ignorar como paso

*/

/* Ejercicio: Sumar todos los numeros hasta n cantidad de veces

n es el tamaño del problema

*/
const sum = (n) => {
  //Pasos: 1 y  2 son constantes
  let contador = 0;
  let counter = 0;

  for (let i = 1; i <= n; i++) {
    console.log(i);
    contador = contador + i;
    counter++;
  }
  // Paso 3: es constante
  console.log(contador);
};
sum(4);

/* 
n + 3
2 + 3
10 + 3
100 + 3

El 3 se vuelve irrelevante y la parte dominante es n ya que es la que crece.

Este algoritmo esta compuesto de dos partes 1 una constante son 3 pasos que se van a ejecutar siempre y la otra si varia tomando como referencia n que es el bucle for.


Como calcular la complejidad?
La complejidad es la parte que es mas dominante.

EN un sentido estricto la complejidad es
n

Notacion Big O sirve para expresar esta complejidad del algoritmo
- O(n)
*/

/* 
La complejidad de este algoritmo es: n + 3
 n son las iteraciones cantidad de veces que se ejecuta mi algoritmo y 3 son los pasos
 */

// sum() -> n+3

function sum2(n) {
  const sum = (n * (n + 1)) / 2;
  return sum;
}

// sum2() 2 -> 1

/* =============== Notacion Big O ========= */
/* 
notion:
Que es Big O?

Calcular en n de pasos para resolver el problema

Cuando hablamos de complejidad es la parte que va a crecer mas rapido.

*/

function x(array) {}

/* Ejercicio 1  */
/* 
función que reciba un arreglo y haga
// una iteración con un for y
// además haga una iteración con un for anidado (recorrer el mismo arreglo con un for dentro de otro)
// contar la cantidad de operaciones que ejecuta cada for
// tratar de calcular y expresar la complejidad del algoritmo con big O notationfor () {}for () {for () {}}

*/

function recorrer(arr) {
  let counter = 0;
  let counter2 = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    counter++;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(i);
      counter2++;
    }
  }

  console.log(counter, counter2);
}
recorrer([1, 2, 3]);

/* Calcular complejidad :
alt + 94

Este algoritmo esta compuesto de tres partes:
n + n ^ 2 + 3

- Alguna de estas tres partes crecera y sera la parte dominante o complejidad

for - for anidado - parte constante
n = 1 -> 1 + 1 + 3
n = 2 -> 2 + 4 + 3
n = 3 -> 3 + 9 + 3
n = 4 -> 4 + 16 + 3
n = 5 -> 5 + 25 + 3
n = 6 -> 6 + 36 + 3
n = 7 -> 7 + 49 + 3

La complejidad de mi algoritmo es:
O(n^2)

*/

/* Como expresamos una complejidad constante?

La forma de representarlo es 1

O(1)

Ambos son constantes y la manera de representar es 1 sin importar cuantos pasos constantes sean. 
*/

function sum2(n) {
  const sum = (n * (n + 1)) / 2;
  console.log("first");
  return sum;
}

function sum2(n) {
  const sum = (n * (n + 1)) / 2;
  console.log("first");
  console.log("second");
  return sum;
}

/* ========= Tabla en el notion Funciones comunes ==== */

// f(n)  ------------- nombre
//-----------------------------
// 1     ------------- constante
// n     ------------- lineal
// n2    ------------- cuadratica
// n3    ------------- cubica

// Grafico -> notion
/* 
Cuando se habla de Complejidad enfocarse en tiempo en base a datos.


Eje x representa los datos parte izquierda

Eje y represnta el tiempo

COmplejidad Constante: sie
COmplejidad lineal: El tiempo aumenta en base a los datos
Complejidad log n: 

*/

/* Ejercicio 2
 Hacer algoritmo que tenga como complejidad O(n^3) 
 
 */

function BigO3(arr) {
  let counter2 = 0;
  let counter3 = 0;

  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr.length; k++) {
      counter2++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        counter3++;
      }
    }
  }

  console.log(counter2, counter3);
}

BigO3([1, 2]);

/* Complejidad de mi algoritmo

n + n ^ 2 + n ^ 3 

n = 1 -> 1 + 2 -> 1 + 3
n = 2 -> 2 + 4 -> 2 + 8

Expresarlo en notacion BigO 
O(n^3)

*/
