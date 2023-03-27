// 1. Usa la sentencia if para ayudar a los clientes de una pizzeria en línea a saber cuanto deben pagar por la pizza que ordenaron.

// las pizzas que tenemos disponibles son:
// 1. Pequeña: $10
// 2. Mediana: $15
// 3. Grande: $20
// 4. Familiar: $25

// En caso de que el cliente solicite una pizza que no esté disponible, debe mostrar un mensaje indicando que no está disponible.
let pizza = "Familiar1";

if (pizza === "Pequeña") {
  console.log(`La pizza Pequeña cuesta $${10}`);
} else if (pizza === "Mediana") {
  console.log(`La pizza Mediana cuesta $${15}`);
} else if (pizza === "Grande") {
  console.log(`La pizza Grande cuesta $${20}`);
} else if (pizza === "Familiar") {
  console.log(`La pizza Familiar cuesta $${25}`);
} else {
  console.log(`La Pizza ${pizza} no esta disponible`);
}

// 2. Defines una función que retorne el número más grande de un objeto que recibe como parámetro.
// Ejemplo:
const obj = {
  a: 21,
  b: 2,
  c: 44,
  d: 4,
  e: 1,
};
console.log(obj.a);
function numberBig(numbers) {
  let max = 0;
  let property = null;

  for (let number in numbers) {
    console.log(numbers[number]);
    if (numbers[number] > max) {
      max = numbers[number];
      property = number;
    }
  }
  console.log(property);
  return { max, property };
}
console.log(numberBig(obj));

// 3. Crea una función que reciba como parámetro un letra como string y retorne true si es una vocal o false si no lo es.

function esVocal(letter) {
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(esVocal("q"));

// 4. Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.
function number(num) {
  if (num >= 10) {
    return num;
  } else {
    return num + num;
  }
}

console.log(number(3));
// 5. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]

function elementMiddle(arr) {
  if (arr.length % 2 === 1) {
    const unoSolo = Math.floor(arr.length / 2);
    console.log(arr[unoSolo]);
  } else if (arr.length % 2 === 0) {
    let array = [];

    const varios1 = Math.floor(arr.length / 2);
    console.log(varios1);
    array.push(arr[varios1 - 1]);
    array.push(arr[varios1]);
    console.log(arr[varios1]);

    return array;
  }
  console.log(5 % 2 === 1);

  // return arr[unoSolo]
}

console.log(elementMiddle([1, 2, 3, 4]));

// 6. Tenemos un array con varios colores repetidos, pero quisieramos saber cuantos colores diferentes hay en el array y que cantidad de cada color hay. Tu trabajo es crear una función que reciba un array de colores y retorne un objeto con la cantidad de cada color.
const colores = ["", "verde", "verde", "azul"];

function contarColores(colores) {
  let contador = {};

  for (let i = 0; i < colores.length; i++) {
    console.log([colores[i]]);
    console.log(contador[colores[i]]);
    if (contador[colores[i]]) {
      contador[colores[i]]++;
    } else {
      contador[colores[i]] = 1;
    }
  }

  console.log(contador);
  return contador;
}

console.log(contarColores(colores));

const object = {};

object.rojo = 1;
object.rojo++;
object.rojo++;
object["rojo"] += 1;

console.log(object);
