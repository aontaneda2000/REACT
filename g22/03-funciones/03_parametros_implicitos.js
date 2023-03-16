/**************************************/
/* FUNCIONES ==> PÁRAMETROS IMPLICÍTOS */
/*************************************/
// => Las funciones tienen dos parámetros implícitos: arguments y this.

// 1) El objeto arguments
function foo() {
  console.log(arguments)
  console.log(arguments[1])
  console.log(arguments.length)
}

foo(1, 'str', true, null, undefined)

// 2) this
function bar() {
  console.log(this)
}

bar()

var obj = {
  a: '1',
  fn() {
    console.log(this.a)
  }
}

obj.fn()