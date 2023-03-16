/* sync */

const operacion = () => 2 + 2

const imprimirResultado = (operacion) => {
  const resultado = operacion()
  return resultado
}

console.log(imprimirResultado(operacion));

/* async */
const obtenerPokemon = () => {
  console.log('Realizando la solicitud');
  setTimeout(() => {
    console.log('Pokemon obtenido');
  }, 0)
}

const pintarPokemon = () => {
  console.log('Mostrando pokemon');
}

/* obtenerPokemon()
pintarPokemon() */

console.log('-------------------');
/* async - callbacks */

const obtenerPokemon2 = (cb) => {
  console.log('Realizando solicitud');
  setTimeout(() => {
    console.log('Pokemon obtenido');
  }, 0)
  
  cb()
}

const pintarPokemon2 = () => {
  console.log('mostrando pokemon');
}
obtenerPokemon2(pintarPokemon2)

/* De esa manera se controla la asincronia cuando se ejecute la funcion o cuando el pokkemon llegue pues me va a ejecutar la funcion callback */

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
const obtenerEstudiantes = (cb) => {
  setTimeout(() => {
    cb(estudiantes)
  }, 500);
}

const filtrarEstudiantes = (id, cb) => {
  setTimeout(() => {
    
    const estudianteFiltrado = estudiantes
    cb()
     
   }, 500)
}

const obtenerNota = () => {
  setTimeout(() => {
    name
  }, 500);
}