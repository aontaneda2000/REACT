/***********************/
/* Funciones Callback */
/**********************/
// => Son funciones que se pasan a otras funciones como argumentos y son llamadas o ejecutadas por la función en la que se pasan.
function foo(cb) {
  const valor = cb();
  return valor;
}

const resultado = foo(bar);
console.log(resultado);

// creando el callback
function bar() {
  return "hola";
}

//Ejemplo:
function encuesta(respuestas, afirmativa, negativa) {
  if (respuestas && respuestas !== "No") {
    afirmativa();
  } else {
    negativa();
  }
}

let respuesta = "No";

encuesta(respuesta, si, no);

// creando los callbacks
function si() {
  console.log("Si");
}

function no() {
  console.log("No");
}
