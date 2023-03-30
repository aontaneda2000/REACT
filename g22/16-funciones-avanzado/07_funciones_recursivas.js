/*************************/
/* Funciones Recursivas */
/************************/
// => Cuando una función se llama a sí misma para resolver una tarea. Esto es lo que se llama recursividad. La recursividad es una técnica de programación que permite resolver problemas que se pueden dividir en subproblemas del mismo tipo.

const usuarios = [
  {
    nombre: "Jesús",
    edad: 20,
  },
  {
    nombre: "Pedro",
    edad: 30,
  },
  {
    nombre: "Maria",
    edad: 40,
  },
];

// Dos formas de pensar:

// 1 => El pensamiento iterativo:
for (let i = 0; i < usuarios.length; i++) {
  console.log(usuarios[i].nombre);
}

// 2 => El pensamiento recursivo:
function foo(arr, i = 0) {
  //
  if (i < arr.length) {
    console.log(arr[i].nombre);
    foo(arr, i + 1);
  }
}

foo(usuarios);
