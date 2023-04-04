/**************************************/
/* ASYNC ==> Asincronía con promesas */
/*************************************/

/* Una promesa es un objeto JavaScript especial, la función pasada a new Promise se llama ejecutor. Cuando se crea new Promise, el ejecutor corre automáticamente. */
const siPago = true

const chofer = new Promise((resolve, reject) => {
  if (siPago) {
    window.setTimeout(() => {
      resolve('Tenga su producto: 📦')
    }, 1000)
  } else {
    reject('Lo siento pero no pagaste 😥')
  }
})

/* Sus argumentos resolve y reject son callbacks proporcionadas por el propio JavaScript. Nuestro código solo está dentro del ejecutor. Cuando el ejecutor, obtiene el resultado más tarde o más temprano, eso realmente no importa, debe llamar a una de estos callbacks:

  - resolve(value) – si el trabajo finalizó con éxito, con el resultado value.
  - reject(error) – si ocurrió un error, error es el objeto error.

Para resumir: el ejecutor corre automáticamente e intenta realizar una tarea. Cuando termina con el intento, llama a resolve si fue exitoso o reject si hubo un error. */

/* Consumidores */
/* Las promesa tiene los siguientes métodos, que podremos utilizar: */

/* .then() Ejecuta la función callback resolve cuando la promesa se cumple. */

/* .catch() Ejecuta la función callback reject cuando la promesa se rechaza.

/* .finally(end): Ejecuta la función callback end tanto si se cumple como si se rechaza. */

// function abuelito(paquete) {
//   console.log(paquete)
// }

// function abagado(dialogo) {
//   console.log(dialogo)
// }

// chofer.then((paquete) => {
//   console.log(paquete)
// }).catch((dialogo) => {
//   console.log(dialogo)
// })

const estudiantes = [
  {
    id: 1,
    nombre: 'Juan',
    nota_id: 1
  },
  {
    id: 2,
    nombre: 'Pedro',
    nota_id: 1
  },
  {
    id: 3,
    nombre: 'Maria',
    nota_id: 3
  },
  {
    id: 4,
    nombre: 'Ana',
    nota_id: 2
  }
]

const notas = {
  1: 'A',
  2: 'B',
  3: 'F'
}

function obtenerEstudiantes(estudiantes) {
  return new Promise((resolve, reject) => {
    resolve(estudiantes)
  })
}

function filtrarEstudiante(id) {
  return new Promise((resolve, reject) => {
    const estudianteFiltrado = estudiantes.find(e => e.id === id)
    resolve(estudianteFiltrado)
  })
}

function obtenrNota(nota_id) {
  return new Promise((resolve, reject) => {
    const nota = notas[nota_id]
    resolve(nota)
  })
}

obtenerEstudiantes(estudiantes)
  .then((estudiantes) => filtrarEstudiante(1))
  .then((estudiante) => {
    console.log(estudiante.nombre)
    return obtenrNota(estudiante.nota_id)
  }).then((nota) => { console.log(nota) })
  .then((estudiantes) => filtrarEstudiante(2))
  .then((estudiante) => {
    console.log(estudiante.nombre)
    return obtenrNota(estudiante.nota_id)
  }).then((nota) => { console.log(nota) })
  .then((estudiantes) => filtrarEstudiante(3))
  .then((estudiante) => {
    console.log(estudiante.nombre)
    return obtenrNota(estudiante.nota_id)
  }).then((nota) => { console.log(nota) })
  .then((estudiantes) => filtrarEstudiante(4))
  .then((estudiante) => {
    console.log(estudiante.nombre)
    return obtenrNota(estudiante.nota_id)
  }).then((nota) => { console.log(nota) })

