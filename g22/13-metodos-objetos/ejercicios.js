// Ejercicios con objetos

// 1. Pasa al objeto persona la propiedad correo del objeto datos, ten en cuenta que el objeto persona no tiene la propiedad correo, tendras que crearla.
const persona = {
  nombre: "Juan",
  edad: 20,
};

const datos = {
  correo: "juan@correo.com",
};
persona.correo = datos.correo;
console.log(persona);

// 2. Crea una función que reciba un matriz de arreglos y regrese un objeto con los valores de la matriz, el primer valor del arreglo sera la llave y el segundo el valor
const matriz = [
  ["nombre", "Juan"],
  ["edad", 20],
  ["correo", "juan@correo.com"],
];

function matrizArr(matriz) {
  return Object.fromEntries(matriz);
}

console.log(matrizArr(matriz));

// ============================================

// 3. Crea una función que reciba un arreglo de objetos alumnos y otro de objetos calificaciones, la función debe combinar los objetos de los arreglos y regresar un arreglo de objetos con la siguiente estructura:
const alumnos = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Pedro" },
  { id: 3, nombre: "Maria" },
];

const calificaciones = [
  { alumno_id: 2, calificacion: 7 },
  { alumno_id: 3, calificacion: 8 },
  { alumno_id: 1, calificacion: 9 },
];

function combinacion(alumnos, calificaciones) {
  let newArray = [];
  for (let i = 0; i < alumnos.length; i++) {
    // console.log(alumnos[i]);
    for (let j = 0; j < calificaciones.length; j++) {
      newArray.push();
      // console.log(calificaciones[j]);
    }
  }
}
function combinacionARR(alumnos, calificaciones) {
  let arrayCombinado = alumnos.concat(calificaciones);
  return arrayCombinado;
}

console.log(combinacionARR(alumnos, calificaciones));

// 4. crea una función que reciba un arreglo de objetos y regrese un nuevo arreglo con los nombres y edades de cada objeto ejemplo: [{nombre: 'Juan', edad: 20},...] => [['Juan', 20],...]
const personas2 = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Pedro", edad: 21 },
  { nombre: "Maria", edad: 22 },
];

function matrizArr2(personas2) {}

console.log(matrizArr2(personas2));

// ================================================

// 5. Dado el siguiente objetos, deberas crear una función que retorne el número que tenga el valor más alto.
const obj = { 34: 2, 23: 6, 29: 4 };
function valorMasAlto(obj) {
  console.log(obj);

  let max = 0;
  for (const number in obj) {
    console.log(number);
    if (number > max) {
      max = number;
    }
  }
  return max;
}

console.log(valorMasAlto(obj));
