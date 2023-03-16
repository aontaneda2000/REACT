/*****************************/
/* FUNCIONES ==> Ejercicios */
/****************************/
// 1. Define una función que imprima por pantalla el mensaje 'Hola, soy una función'.
function miFuncion() {
  console.log("Hola soy una funcion");
}
miFuncion();
// 2. Define una función que reciba un nombre por parámetro y muestre el mensaje 'Hola, soy [nombre]'.

function nameParametro(nombre) {
  console.log(`Hola soy ${nombre}`);
}

nameParametro("Aaron");

// 3. Define una función que reciba por parámetro una cadena de texto y retorne el último carácter de la cadena.

function lastCaracter(str) {
  return str[str.length - 1];
}

const result = lastCaracter("Cadenas");
console.log(result);

// 4. Completa la función para que agregue más elementos al final del array.
const array = ["a", "b", "c"];

function add(arr, item) {
  // ...
  arr.push(item);

  return arr;
}
console.log(add(array, "d"));

// 5. Define una función que compruebe si existe una propiedad en un objeto, si es así, debe retornar true y si no, false.
const obj = {
  name: "Juan",
  age: 25,
  country: "MX",
};

function hasProperty(obj, property) {
  // ...

  return property in obj;
}

console.log(hasProperty(obj, "name"));

// 6. La siguiente función debe retornar el mensaje 'Hola, soy [nombre] tengo [edad] años y soy de [pais]'.
function bar(name, age, country) {
  // ...
  return `Hola soy ${name} tengo ${22} años y soy de ${country}`;
}
const result3 = bar("Aaron", 32, "Ecuador");

console.log(result3);

// 7. Define una función que reciba como parámetro un objeto con las propiedades nombre, edad y pais y un string con el nombre de la propiedad pais. La función deberá retornar el valor de la propiedad pais.

const obj2 = {
  name: "Aaron",
  age: 22,
  country: "Ecuador",
};

function getPropertyCountry(obj, str) {
  obj.country = str;

  console.log(obj);

  return obj.country;
}

console.log(getPropertyCountry(obj2, "Ecuador"));
// 8. Define una función que reciba como parámetro un arreglo de 3 números deberás retornar la suma de todos los números.

const threeNumbers = [1, 2, 3];

function arrayNums(arr) {
  let contador = 0;

  for (let i = 0; i < arr.length; i++) {
    contador = contador + arr[i];
  }

  return contador;
}

console.log(arrayNums(threeNumbers));

// 9. Resuelve el siguiente problema utilizando funciones:
// Tenemos un arreglo de usuarios, cada usuario tiene varios atributos, como nombre, edad, país, etc. Queremos obtener un arreglo con los nombres de todos los usuarios.

const usuarios = [
  {
    nombre: "Erik",
    edad: 29,
    correo: "erik@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/erik" },
      { nombre: "twitter", url: "twitter/erik" },
    ],
    genero: "H",
  },
  {
    nombre: "Georg",
    edad: 33,
    correo: "georg@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/georg" },
      { nombre: "twitter", url: "twitter/georg" },
    ],
    genero: "H",
  },
  {
    nombre: "Andrea",
    edad: 42,
    correo: "andrea@hotmail.com",
    social: [
      { nombre: "facebook", url: "facebook/andrea" },
      { nombre: "twitter", url: "twitter/andrea" },
    ],
    genero: "M",
  },
  {
    nombre: "Oscar",
    edad: 31,
    correo: "oscar@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/oscar" },
      { nombre: "twitter", url: "twiter/oscar" },
    ],
    genero: "H",
  },
  {
    nombre: "Daniela",
    edad: 22,
    correo: "andrea@uaq.mx",
    social: [
      { nombre: "facebook", url: "facebook/andrea" },
      { nombre: "twitter", url: "twitter/andrea" },
    ],
    genero: "M",
  },
];

console.log(usuarios[4].social[0].url);
console.log(usuarios[4].social[1].url);

function getNames(usuarios) {
  // console.log(usuarios)
  // ...
  let getNames2 = [];

  for (let i = 0; i < usuarios.length; i++) {
    getNames2.push(usuarios[i].nombre);
  }

  return getNames2;
}

console.log(getNames(usuarios));

// 10. Resuelve el siguiente problema utilizando funciones:
// Tenemos un arreglo de usuarios, cada usuario tiene varios atributos, como nombre, edad, país, etc. Queremos obtener un arreglo con tadas las url de las redes sociales de todos los usuarios.

function getSocialUrls(usuarios) {
  // ...

  let arrUrl = [];

  for (let i = 0; i < usuarios.length; i++) {
    arrUrl.push(usuarios[i].nombre);
  }

  console.log(arrUrl);
}

console.log(getSocialUrls(usuarios));
