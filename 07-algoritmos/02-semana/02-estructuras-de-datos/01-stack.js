class Stack {
  constructor() {
    /*  Nueva pila vacia */
    this.items = [];
  }

  /*  Agrega elemento a la pila */
  push(item) {
    this.item.push(item);
  }
  /* Elimina elemento de la pila */
  pop() {
    this.item.pop();
  }

  /*Retorna el item en el tope de la pila pero no lo elimina  */
  peek() {
    return this.items[this.items.length - 1];
  }

  /* Comprueba si la pila esta vacia */
  isEmpty() {
    return this.items.length === 0;
  }

  /* Devuelve el numero de elementos */
  size() {
    this.items.length;
  }
}

/* Instancia de pila */
const stack = new Stack();

console.log(stack);
