/*********************/
/* Funciones Flecha: no admite arguments, no admite this*/
/********************/

/* Funcion con un parametro */
const miFuncion = (str) => console.log(str);
miFuncion("str");

const bar = (a, b) => a + b; // Return implícito. sin llaves porque si las tiene hay que agregar el return

console.log(bar(2, 3));

const baz = (str) => `Hola ${str}`; // Return implícito.

console.log(baz("Juan"));

/* Return explicito */
const foo = (a, b) => {
  const operacion = a + b;
  return operacion;
};

console.log(foo(3, 4));
