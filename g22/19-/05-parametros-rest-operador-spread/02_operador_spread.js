/********************/
/* Operador Spread */
/*******************/
const numeros = [1, 50, 200, 35, 5, 100, 6];

console.log(Math.max(...numeros));

// agregando a un arreglo otro arreglo o un elemento
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr.concat(arr2, 6, 7, 8, 9));

console.log([...arr, ...arr2, 7, 8, 9]);

console.log("javascript".split(""));

console.log([..."javascript"]);

const array = ["Jesus"];

const copyArray = [...array];

copyArray[0] = "Brayan";

console.log(copyArray);

console.log(array);

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// Genera nueva copia
const objeto = { ...obj };

// No modifica el objeto original
objeto.b = 5;

console.log(objeto);

console.log(obj);
