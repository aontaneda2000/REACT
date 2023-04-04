/*************************************/
/* ASYNC ==> Asincronía async/await */
/************************************/
/* En 2017 se introducen las palabras clave async/await, que no son más que una forma de azúcar sintáctico para gestionar las promesas de una forma más sencilla. Con async/await seguimos utilizando promesas, pero abandonamos el modelo de encadenamiento de .then() para utilizar uno en el que trabajamos de forma más tradicional. */
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


// estudiante 1
async function foo(cb) {
  const data = await cb()
}

/* Top-level await */
/* Una nueva propuesta denominada top-level await permite utilizar await fuera de funciones async, por lo que es muy probable que en poco tiempo comencemos a utilizarla sin tener que incluir el async en las funciones. Sin embargo, sólo funcionará en determinados contextos. */
try {
  const students = await obtenerEstudiantes(estudiantes)
  const student = await filtrarEstudiante(1)
  const nota = await obtenrNota(student.nota_id)

  console.log(student.nombre)
  console.log(nota)

} catch (error) {
  console.log('Oye algo salio muy mal')
}

// estudiante 1
// const students2 = await obtenerEstudiantes(estudiantes)
// const student2 = await filtrarEstudiante(2)
// const nota2 = await obtenrNota(student.nota_id)

// console.log(student2.nombre)
// console.log(nota2)

// const obtenerNota = async () => {

// }
