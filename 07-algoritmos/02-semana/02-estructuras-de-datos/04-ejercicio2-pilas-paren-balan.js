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

function check(text) {
  const stack = new Stack();

  let balanced = true;

  for (let i = 0; i < text.length; i++) {
    if (text[i] == "(") {
      stack.push(text[i]);
    } else {
      if (stack.isEmpty()) {
        balanced = false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.isEmpty() && balanced;
}

console.log(check(")(())"));
