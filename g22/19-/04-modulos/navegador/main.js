import PI, { foo as fn } from './script.js'

function foo() {
  console.log('Función dentro del main')
}

console.log(fn())

foo()

console.log(PI)
