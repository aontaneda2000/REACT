/************/
/* Y (AND) */
/***********/
// => AND es representado con dos ampersands &&

// => Todo lo contario a OR
// => AND el primer valor falso
console.log(true && 34 && false && '' && 'abc') // false

console.log(true && ' ' && 43 && 'abc')

console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(false && false)

const h = 7
const m = 5
const s = 0

console.log(h == 7 && m == 0 && s == 0)

console.log(m == 0)

console.log(true && false && true)
