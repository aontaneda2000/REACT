// 1. Crea un arreglo con los números del 1 al 400
const numbers = [];

for (let i = 0; i <= 400; i++) {
  numbers.push(i);
}

console.log(numbers);

// 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.
function numbersRange(num1, num2) {
  let numbers = [];

  for (let i = num1; i <= num2; i++) {
    numbers.push(i);
  }

  return numbers;
}

console.log(numbersRange(1, 4));

// 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números.
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros1[0]);

function sumaNumbers(arrSum) {
  let contador = 0; //1

  for (let i = 0; i < arrSum.length; i++) {
    contador = arrSum[i] + contador;
  }
  return contador;
}

console.log(sumaNumbers(numeros1));

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

// 4. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con los correos de los usuarios.

function users(usuarios) {
  let correosUsers = [];

  for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].correo);

    correosUsers.push(usuarios[i].correo);
  }
  return correosUsers;
}

console.log(users(usuarios));

// 5. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todas las urls de las cuentas de facebook.
function users2(usuarios) {
  let correosUsers = [];

  for (let i = 0; i < usuarios.length; i++) {
    for (let j = 0; j < usuarios[j].social.length; j++) {
      // console.log(`i: ${i} j: ${j}`);
      correosUsers.push(usuarios[i].social[j].url);
      // console.log(usuarios[i].social[j].url);
    }
  }
  return correosUsers;
}

console.log(users2(usuarios));
// 6. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los nombres de los usuarios que sean mujeres.
function usersArr(users) {
  let womenUsers = [];

  for (let i = 0; i < users.length; i++) {
    console.log(users[i].genero);
    if (users[i].genero === "Mujer") {
      womenUsers.push(users[i].nombre);
    }
  }
  return womenUsers;
}

console.log(usersArr(usuarios));

// 7. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los usuarios que esten dentro del rango de edad de 20 a 30 años.

function agesUsers(users) {
  let rangeAge = [];

  for (let i = 0; i < users.length; i++) {
    console.log(users[i].edad);
    if (users[i].edad >= 20 && users[i].edad <= 30) {
      console.log(users[i].edad);
      rangeAge.push(users[i].edad);
    }
  }

  return rangeAge;
}

console.log(agesUsers(usuarios));
