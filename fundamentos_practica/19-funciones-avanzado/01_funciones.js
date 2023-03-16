/************************************/
/* FUNCTION ==> Funciones Avanzado */
/***********************************/
/* Funcion de primera clase */
/* Un lenguaje de programación se dice que tiene Funciones de primera clase cuando las funciones en ese lenguaje son tratadas como cualquier otra variable. Por ejemplo, en ese lenguaje, una función puede ser pasada como argumento a otras funciones, puede ser retornada por otra función y puede ser asignada a una variable. */

/* Funciones declaradas  */
function nombre() {
  console.log('declarada');
}
nombre()

/* Funcion de expresion */
const variable = function () {
  console.log('expresada');
  
}

variable()

let condicional = true
let fn

if (condicional) {
  fn = function () { console.log('true'); }
} else {
  fn = function () { console.log('false'); }
}

fn()
/************************************/
/* FUNCTION ==> Funciones Callback */
/***********************************/
/* Una función que pasamos como argumento a otra función se llama callback */

function preguntar(respuesta, acepto, rechazo) {
  if (respuesta) {
    acepto()
  } else {
    rechazo()
  }
}

// let respuesta = true

function acepto() {
  console.log('Acepto');
}

function rechazo() {
  console.log('rechazo');
}

preguntar(true, acepto, rechazo)

/*********************************************/
/* FUNCTION ==> Funciones de Orden Superior */
/*******************************************/
/* Funciones que llaman a otras funciones o que devuelven funciones (closures), se conocen como funciones de orden superior. */

function saludar (){
  return function () {
    return 'Hola'
  }
}

console.log(saludar()())

const valor = saludar ()
console.log(valor)


/* Closures */
/* Una clausura o closure es una función que permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada. */
function crearContador(){
  let contador = 0;
  return function incrementar() {
    return contador++
  }

  return incrementar
}

console.log(crearContador())

/**************************************/
/* FUNCTION ==> Funciones de Fábrica */
/*************************************/
/* Una función de fábrica es cualquier función que no es una clase o constructor que devuelve un objeto (presumiblemente nuevo). En JavaScript, cualquier función puede devolver un objeto. Cuando lo hace sin la palabra clave "new", es una función de fábrica. */

function crud() {
  const usuarios = []

  return {
    crear(usuario) {
      usuarios.push(usuario)
    },
    leer:function (callback) {
      callback(usuarios)
    },
    actualizar:function (usuario) {
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === usuario.nombre) {
          usuarios[i] = usuario
        }        
      }
    },
    borrar:function (usuario) {
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === usuario.nombre) {
          usuarios.splice(i,1)
        }        
      }
    }
  }
}

const grupo16 = crud();


grupo16.crear({nombre: 'Jesus'})

grupo16.leer(function (usuarios) {
  console.log(usuarios);
})


grupo16.crear({nombre: 'Aaron'})

grupo16.leer(function (usuarios) {
  console.log(usuarios);
})


grupo16.actualizar({nombre:'Jesus', edad:30})
grupo16.leer(function (usuarios) {
  console.log(usuarios);
})

grupo16.borrar({nombre: 'Aaron'})

grupo16.leer(function (usuarios) {
  console.log(usuarios);
})
/**************************************/
/* FUNCTION ==> Funciones Recursivas */
/*************************************/
/* La recursión es un patrón de programación que es útil en situaciones en las que una tarea puede dividirse naturalmente en varias tareas del mismo tipo, pero más simples, en el proceso puede llamar a muchas otras funciones. Un caso particular de esto se da cuando una función se llama a sí misma. Esto es lo que se llama recursividad. */

const usuarios = [
  {
    nombre: 'Jesús',
    edad: 20
  },
  {
    nombre: 'Pedro',
    edad: 30
  }, {
    nombre: 'Maria',
    edad: 40
  }
]

/* Dos pensamientos */
/* Pensamiento iterativo for */

for (const usuario of usuarios) {
  console.log(usuario);
}

/* pensamiento recursivo */

function recursion(usuarios) {
  if (3 > usuarios.length) {
    
  }

}
recursion(usuarios)
/*************************************/
/* FUNCTION ==> Funciones de Flecha */
/************************************/
/* Hay otra sintaxis muy simple y concisa para crear funciones, que a menudo es mejor que las Expresiones de funciones. Se llama “funciones de flecha”, porque se ve así: */

/* Que es una expresion: es una linea de codigo */


const suma = (a,b) => {
  return a +b 
}

const resultado = suma(2, 3)

console.log(resultado);