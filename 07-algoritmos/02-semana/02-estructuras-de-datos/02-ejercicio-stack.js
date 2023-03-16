/* Crear el objeto pila y que  */
class Stack {
  constructor() {
    this.items = [];
  }

  push(items) {
    this.items.push(items);
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(5);
stack.push(4);
stack.push(2);
console.log(stack);
/* Elimina el ultimo elemento del arreglo */
stack.pop();

/* Devuelve el ultimo elemento */
console.log(stack.peek());

/* Comprueba si la pila esta vacia === true*/
console.log(stack.isEmpty());
