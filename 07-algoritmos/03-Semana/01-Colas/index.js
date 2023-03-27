/* Colas */
/* Es una Coleccion ordenada de items 


FIFO: Primero en entrar sera el primero en salir
Ejemplo de comprar tortillas:
  La primera persona en llegar va a ser atendida y la persona que este en el ultimo tiene que esperar.
*/

class Queue {
  constructor() {
    this.items = [];
  }

  /* Metodo encolar empuja un elemento al final de la cola */
  enqueue(item) {
    return this.items.push(item);
  }

  /* Metodo elimina el primer elemento de la cola */
  dequeue() {
    return this.items.shift();
  }
  /* Metodo comprueba si la cola esta vacio */
  isEmpty() {
    return this.items.length === 0;
  }

  /* metodo tamaño de la cola */
  size() {
    return this.items.length;
  }
}

// 1,2,3,4,5

/* Instancia */
const queue = new Queue();

/* Encolas siguientes elementos */
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

/* Desencolas siguientes elementos */
queue.dequeue();

console.log(queue);


/*
  La Parte importante como entran y salen elementos

*/

/* Ejercicio de impresoras */