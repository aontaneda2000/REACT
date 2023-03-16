// 1. al encontrar un paréntesis de apertura lo meto al tope de la pila
// 2. al encontrar un paréntesis de cierre saco el último elemento que metí en la pila
// 2.1 Si al intentar sacar un elemento no hay nada, esto significa que los paréntesis no están balanceados
// 3. Si al terminar de recorrer el string de paréntesis aún hay elementos en mi pila, significa que los paréntesis no están balanceados
// Crear una función que retorne verdadero si los paréntesis están balanceados, en caso contrario debe retornar falso

class Stack {
  constructor() {
    this.str = [];
  }

  parentesisBalanceado(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        this.str.push(str[i]);
      }
      if (str[i] === ")") {
        this.str.pop();
      }
    }
  }

  isEmpty() {
    return this.str.length === 0;
  }
}

const stack = new Stack();

stack.parentesisBalanceado("))))");
// stack.parentesisBalanceado("))))");
console.log(stack);
console.log(stack.isEmpty());

// Tambien te queria preguntar si el ejercicio de parentesis balanceado de la semana 2 esta bien ya que tu lo hiciste de otra manera
