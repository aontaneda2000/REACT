/* Estructuras de datos basicas*/

/* 
===========Estructuras de datos lineales=======
Tienen dos extremos
Similar cuando se trabaja con arreglos de saber cual es el inicio y cual es final 

Permiten agregar items en un solo extremo
Permiten que los item se eliminen de cualquiera extremo
*/

/* =========E. Lineales Pilas =========*/

/* 
Es una coleccion  ordenada de items (img de google)

EL primer elemento entrar sera el ultimo en salir.

La parte superior es el tope
La parte de abajo es la base

En js no existe pila hay que trabajar en arreglos.

PIlas sirve para resolver otros tipos de problemas
 Pilas tineen ordenamiento LIFO 
 
 El primero en entrar es el  ultimo en salir
 
 */

/* Ejercicio 1 implementacion de la pila */
class Pila {
  constructor() {
    this.items = []; /* [1,2,3,4] -> el tope es el extremo derecho */
  }

  /* Metodo push agrega un item a la pila y  no devuelve nada */
  push(items) {
    this.items.push(items);
  }

  /* Metodo pop elimina el ultimo elemento de la pila */
  pop() {
    return this.items.pop();
  }

  /* Metodo peek Devuelve el item en el tope de la pila pero no lo elimina */

  peek() {
    return this.items[this.items.length - 1];
  }

  /* Metodo comprueba si la pila esta vacia */
  isEmpty() {
    return this.items.length === 0;
  }

  /* Metodo devuelve Numero de elementos de la pila */
  size() {
    return this.items.length;
  }
}

/* 
[
  2,
  4,
  5,
  2,
  1
]

*/

const pila = new Pila();

/* Accediendo a sus metodos de la pila */
pila.push(1);
pila.push(2);
pila.push(5);
pila.push(4);
pila.push(2);

// console.log(pila);

console.log(pila.pop());
console.log(pila.pop());
console.log(pila.pop());
console.log(pila.pop());
console.log(pila.pop());
console.log(pila.isEmpty());

// console.log(pila);

/* ============= Ejercicio 1 parentesis balanceado para resolver una operacion aritmetica
 explicacion 2:30 ===  */
// 1. al encontrar un paréntesis de apertura lo meto al tope de la pila

// 2. al encontrar un paréntesis de cierre saco el último elemento que metí en la pila

// 2.1 Si al intentar sacar un elemento no hay nada, esto significa que los paréntesis no están balanceados

// 3. Si al terminar de recorrer el string de paréntesis aún hay elementos en mi pila, significa que los paréntesis no están balanceados

// Crear una función que retorne verdadero si los paréntesis están balanceados, en caso contrario debe retornar falso

function check(text) {
  const stack = new Pila();
  /* default si esta balanceado */
  let balanced = true;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "(") {
      stack.push(text[i]);
    } else {
      /* Si encuentro un elemento de cierro saco el último elemento que metí en la pila pero si no hay nada que sacar   */
      if (stack.isEmpty()) {
        balanced = false;
      } else {
        stack.pop();
      }
    }
  }
  /* retornar que esta vacio 'true' y que este balanceado "true" que el valor de false nunca haya cambiado */
  return stack.isEmpty() && balanced;
}

/* ()()() */
console.log(check("()()()("));
