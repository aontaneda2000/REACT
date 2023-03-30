/************************/
/* Métodos de Busqueda */
/***********************/
// => Las propiedades de navegación del DOM son ideales cuando los elementos están cerca unos de otros. Pero, ¿y si no lo están? ¿Cómo obtener un elemento arbitrario de la página?

// => querySelector, la llamada a elem.querySelector(css) devuelve el primer elemento para el selector CSS dado.
const elemento = document.querySelector("p");
console.log((elemento.style.border = "1px solid red"));

// => querySelectorAll, sin duda el método más versátil, elem.querySelectorAll(css) devuelve todos los elementos dentro de elem que coinciden con el selector CSS dado.
const parrafos = Array.from(document.querySelectorAll("p"));

console.log(parrafos);
for (let p of parrafos) {
  p.style.border = "1px solid red";
}

// => Existe además una variable global nombrada por el id que hace referencia al elemento:

// btn.style.backgroundColor = 'green'

// => getElementByid()
const boton = document.getElementById("btn");
boton.style.backgroundColor = "orange";

// => Generalmente no es una buena práctica. Puede haber conflictos de nombres. Además, cuando uno lee el código de JS y no tiene el HTML a la vista, no es obvio de dónde viene la variable. En la vida real document.getElementById es el método preferente.

// getElementsBy* FAMILIA
// errores
// no olvides la s
// devuelve una coleccion no un elemento

// => getElementsByTagName: busca por etiquetas y devuelve una coleccion con ellas

// => getElementsByClassName: busca por clases y devuelve una coleccion con ellas

// => getElementsByName: devuelve elementos con el atributo name dado.

//>===== metodos consisten en buca un nodo
// metodos para comprobar.si el elemento coincide con el selector css dado
// => matches() para texto
if (e.target.matches("#btn")) {
  console.log(e.target);
}

// => closest(): busca el ancestro mas cercano que coincide con el selector css. y es utilizado cuando se tiene un elemento dentro del boton para no tener problemas

if (e.target.closest("#btn")) {
  console.log(e.target);
}

// => contains(): comprueba relacion hijo-padre, ya que aveces es util

const ul = document.querySelector("ul");
const li = ul.querySelector("li");

console.log(ul);
console.log(li);

console.log(ul.contains(li));
