/*********************************************/
/* FUNCTION ==> Funciones de Orden Superior */
/********************************************/
// => Una función de orden superior es una función que recibe una función como argumento de entrada o devuelve una función como salida.

// 1) Funciones que recibe una función como argumento de entrada:

function superior(arr, cb) {
  // for (let i = 0; i < arr.length; i++) {
  //   cb(arr[i], i, arr)
  // }
}

let array2 = ["a", "b"];

// otra manera es pasarle directo la funcion como argumento
superior(array2, resultado);

// Creando el callback
function resultado(elemento) {
  console.log(elemento);
}

// find

// filter

const array = ["a", "b", "c", "d"];

const vector = [1, 2, 3, 4, 5];

const matriz = [
  { skill: "HTML", rating: 4.5 },
  { skill: "css", rating: 3 },
  { skill: "JavaScript", rating: 5 },
  { skill: "React", rating: 5 },
];

{
  // superior(array, resultado)

  // creando el callback
  // function resultado(el) {
  //   console.log(el.toUpperCase())
  // }

  superior(array, (el, i, arr) => {
    console.log(el, i, arr);
  });

  Array.prototype.iterador = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  };

  array.iterador((el, i, arr) => {
    console.log(el, i, arr);
  });
}

/*
Sintaxis de forEach:
keyword((elemento, index, array) => ...)

Parámetros:
  - callback: Función a ejecutar por cada elemento. 
  Recibe tres argumentos:
    - elemento: El elemento actual.
    - index: El índice del elemento actual.
    - array: Es el array mismo que está siendo recorrido. */

// =====>  Iteración con forEach: no retorna nada solo sirve para recorrer arrays y sirve para creacin de un carrito de comrpas para pintar productos

{
  array.forEach((el, i, arr) => {
    console.log(el, i, arr);
  });
}

// =====> Busqueda con find o findIndex==== Devuelve el primer elemento que encuentre
{
  /* =============> Find debe comprobar algo, 'el' es el objeto, luego el objeto en la propiedad skill es igual a css y si lo encuentra lo devuelve */
  const resultado = matriz.find((el) => el.skill === "css");
  /* devuelve el objeto que contiene a css */
  console.log(resultado);

  /* =============> FINDINDEX: DEVUELVE DONDE SE ENCUENTRA EL ELEMENTO */
  const resultado2 = matriz.findIndex((el) => el.skill === "css");

  /* DEVUELVE EL INDICE DONDE SE ENCUENTRA */
  console.log(resultado2);
}

// =====>FILTER ==> Filtrar y regresa un nuevo array con filter
{
  /* 1  FILTRADO CON METODO FILTER====> Devuelve un array con los elementos segun la comprobacion  */
  const elementosFiltrados = matriz.filter((el) => el.rating > 4.5);

  /* MUESTRA ARRAY CON LOS ELEMENTOS FILTRADOS*/
  console.log(elementosFiltrados);

  /* 2 FOR TRADICIONAL OTRA FORMA DE HACERLO EN VEZ DE UTILIZAR FILTER */

  // ARRAY VACIO
  let array = [];

  for (let i = 0; i < matriz.length; i++) {
    //  CONDICION
    if (matriz[i].rating > 4.5) {
      //  EMPUJAR ESOS ELEMENTOS
      array.push(matriz[i]);
    }
  }

  console.log(array);
}

// =====> Transformar un array con map:
{
  const usuarios = [
    {
      nombre: "Erik",
      edad: 29,
      correo: "erik@academlo.com",
      social: [
        { nombre: "facebook", url: "facebook/erik" },
        { nombre: "twitter", url: "twitter/erik" },
      ],
      genero: "Hombre",
    },
    {
      nombre: "Georg",
      edad: 33,
      correo: "georg@academlo.com",
      social: [
        { nombre: "facebook", url: "facebook/georg" },
        { nombre: "twitter", url: "twitter/georg" },
      ],
      genero: "Hombre",
    },
    {
      nombre: "Andrea",
      edad: 42,
      correo: "andrea@hotmail.com",
      social: [
        { nombre: "facebook", url: "facebook/andrea" },
        { nombre: "twitter", url: "twitter/andrea" },
      ],
      genero: "Mujer",
    },
    {
      nombre: "Oscar",
      edad: 31,
      correo: "oscar@academlo.com",
      social: [
        { nombre: "facebook", url: "facebook/oscar" },
        { nombre: "twitter", url: "twiter/oscar" },
      ],
      genero: "Hombre",
    },
    {
      nombre: "Daniela",
      edad: 22,
      correo: "andrea@uaq.mx",
      social: [
        { nombre: "facebook", url: "facebook/andrea" },
        { nombre: "twitter", url: "twitter/andrea" },
      ],
      genero: "Mujer",
    },
  ];

  /* metodo map: Devuelve un nuevo arreglo con lo que se indique. */
  const result = usuarios.map((el) => el.correo);

  console.log(result);
}

/*=====> Sintaxis reduce:
array.reduce((acumulador, elemento, index, array) => ..., valorInicial) 

Parámetros:
  - acumulador: Es el valor que se va acumulando en cada iteración.
  - elemento: Es el elemento actual.
  - index: Es el índice del elemento actual.
  - array: Es el array mismo que está siendo recorrido.
  - valorInicial: Es el valor inicial del acumulador, si no se proporciona el primer elemento del array será utilizado. */

{
  // bandera
  let sum = 0;

  //
  for (let num of vector) {
    sum += num;
  }
  // resultado
  console.log(sum);

  // el: es sum dentro del for
  // acc: se acumula la suma

  const resultado = vector.reduce((acc, el) => acc + el, 0);

  console.log(resultado);
}
/* ========================================= */

// 2) ==> CLOUSURES: Funciones que devuelven una función como salida. PREGUNTA DE ENTREVISTA

function foo() {
  return function () {
    console.log("Hola Mundo!!!");
  };
}

// forma 1
// const bar = foo()

// bar()

// forma 2 ----->>EJECUTAR CLOUSURES
foo()();

// => Existe un término general de programación “closure” que los desarrolladores generalmente deben conocer.

function ordenSuperior() {
  let x = 1;

  return function () {
    // let x = 1; no funciona

    return x++;
  };
}

const contador = ordenSuperior();

console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
