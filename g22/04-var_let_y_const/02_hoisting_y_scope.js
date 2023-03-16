/******************************************************/
/* VARIABLES ==> Var, Let & Const (hoisting y scope) */
/*****************************************************/

/* => El motor de JS que está analizando y ejecutando tu código tiene 2 pasos que realizar:
  - Analizar el código en el Arbol de Sintaxis Abstracto/código de bytes ejecutable, y
  - Ejecución en tiempo real. */

/* QUE ES? Es la elevacion de las f declaradas y las variables declaradas con var que cuando var se eleva se le asigna el valor de undefined */

nombre();

function nombre() {
  console.log("Hola");
}

console.log(x);

var x;

/* let const: Solo pueden ser llamadas despues que hayan sido declaradas */

/* Funciones expresadas solo pueden ser llamadas despues de que hayan sido declaradas. */
var fn = function () {
  console.log("hola");
};

fn();

// La única diferencia con const y let es que, cuando son elevadas, sus valores no toman el valor por defecto undefined. En su lugar, se quedan en el estado TDZ (zona muerta temporal).
// console.log(y)

// let y

/* *====================***** */
// => Ámbito Global (global-scope) es accesible desde cualquier parte del código. También están disponibles durante toda la vida útil que ejecuta nuestro programa.

var a = 1;
let b = 2;
const c = 3;

function foo() {
  console.log(a);
  console.log(b);
  console.log(c);
}

foo();

{
  console.log(a);
  console.log(b);
  console.log(c);
}

// => Ámbito local (local-scope) podemos dividir el alcance local en dos partes, alcance de función y alcance de bloque.

// => ámbito de función (function-scope) cualquier variable creada dentro de este ámbito local será accesible solo desde esta función. Los parámetros de función también se clasifican como dentro del ámbito local. Si intenta acceder a ellos desde fuera de la función, JavaScript arrojará un error.
function bar() {
  var j = 1;
  let k = 2;
  const l = 3;

  console.log(j);
  console.log(k);
  console.log(l);
}

// console.log(j)
// console.log(k)
// console.log(l)

bar();

// => Las declaraciones let y const son ambas block-scoped, que significa que solo son accesibles dentro de las llaves { } que les rodean. La declaración var, por otro lado, no tiene esa restricción.

{
  var j = 1;
  let k = 2;
  const l = 3;

  console.log(k);
  console.log(l);
}

console.log(j);
// console.log(k)
// console.log(l)

/* funcion pura */
