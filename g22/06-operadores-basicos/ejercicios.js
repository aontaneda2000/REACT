// 1. Realiza una función que reciba un número y devuelva true si es par o false si es impar.
function numberPar(num) {
  return num % 2 === 0;
}

console.log(numberPar(2));

// 2. Realiza una función que reciba un número y devuelva true si es múltiplo de 5 o false si no lo es.

function multipleNumberFive(num) {
  return num % 5 === 0 ? true : false;
}
console.log(multipleNumberFive(15));

// 3. Realiza una función que reciba un número y devuelva el doble de ese número.
function dobleNumber(num) {
  return num ** 2;
}

console.log(dobleNumber(3));

// 4. ¿Cuál es el resultado de las siguientes operaciones?
console.log(2 + 2 * 2); // 6
console.log(10 + 4 - 2 * 5); // 4
console.log(11 % 4); // 3
console.log(10 ** 2); // 100

// 5. ¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?
let a = 1; // 1
let b = 1; // 1

const c = ++a; // 2
const d = b++; // 2

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 6. ¿Cuáles son los valores de ‘e’ y ‘f’ después del código a continuación?
let e = 2;
const f = 1 + (e *= 2);
console.log(e); // 4
console.log(f); // 5

// 7. ¿Cuál es el valor de ‘g’ después del código a continuación?
let g = 3;
g += 5;
console.log(g); // 8
