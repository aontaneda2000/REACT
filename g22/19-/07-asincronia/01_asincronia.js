/***************************************/
/* ASYNC ==> Asincronía en JavaScript */
/**************************************/
/* La asincronía es uno de los conceptos principales que rige el mundo de Javascript. Cuando comenzamos a programar, normalmente realizamos tareas de forma síncrona, llevando a cabo tareas secuenciales que se ejecutan una detrás de otra, de modo que el orden o flujo del programa es sencillo y fácil de observar en el código. */

/* Concurrencia: Una sola tarea que se ejecuta en un momento determinado */

/* Lenguaje no bloqueante */
// console.log('Tarea #1')
// let texto
// for (let i = 0; i < 5000000000; i++) {
//   texto = 'Tarea #2'
// }
// console.log(texto)
// console.log('Tarea #3')

/* Cuando hablamos de Javascript, habitualmente nos referimos a él como un lenguaje no bloqueante. Con esto queremos decir que no es necesario esperar a que una tarea se complete para poder realizar otra tarea. */

/* Sin embargo, tarde o temprano necesitaremos realizar operaciones asíncronas, especialmente en ciertos lenguajes como Javascript, donde tenemos que realizar tareas que tienen que esperar a que ocurra un determinado suceso que no depende de nosotros, y reaccionar realizando otra tarea sólo cuando dicho suceso ocurra. */

console.log("Tarea #1");

// ASYNC
window.setTimeout(() => {
  console.log("Tarea #2");
}, 0);

console.log("Tarea #3");

/* En Javascript existen varias formas de gestionar la asincronía, donde quizás las más populares son las siguientes:

  - callbacks: Probablemente, la forma más clásica de gestionar la asincronía en Javascript.
  - promesas: Una forma más moderna y actual de gestionar la asincronía.
  - async/await: Seguimos con promesas, pero con async/await añadimos más azúcar sintáctico.
  - top-level await: Una variación de la anterior, donde no es necesario usar async. */

/* CALLBACKS */
function obtenerDatosApi() {
  console.log("Realizno la soli");
  window.setTimeout(() => {
    console.log("recursos entregados");
  }, 1000);
}

function pintarLosRecursos() {
  console.log("Pintando el dom");
}

obtenerDatosApi();
pintarLosRecursos();

/* CONTROLAR ASINCRONIA ASINCRONIA */

/* =========PROMESAS========= */

/* no creamos promesas en js pero simulamos instanciando y recibe resolve (si) y reject (no)


Ejemplo:
Si el niño se porto bien; crear regalo
*/

const accionDelBebe = true;

const data = new Promise(function (resolve, reject) {
  window.setTimeout(() => {
    if (accionDelBebe) {
      const regalo = {
        consola: "xbox",
      };
      resolve(regalo);
    } else {
      reject("Sigue participando 😢");
    }
  }, 1000);
});

/* que recibo en data? Una promesa: 

Como consumimos o resolvemos la promesa del ejemplo?
con consumidores then y catch
*/
// 1
console.log(
  data.then(function (data) {
    console.log(data.consola);
  })
);

// 2

/* ========ASYNC AWAIT======== */
/* azucar sintactico async await: Funcion asincrona promise pending -> await espera la response */

async function getBox() {
  const response = await data;

  console.log(response);
}
getBox();

// 2: obtener producos

async function getProducts() {
  const res = res.json();
  // const data = await
}

getProducts();
/* TOPLEVEL: ==== */

/* Se utiliza async await sin una funcion asincrona pero se requiere agregar al script que sera de tipo modulo y tiene que ser el archivo principal */
