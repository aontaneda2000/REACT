/************************/
/* Métodos de Busqueda */
/***********************/
// => Las propiedades de navegación del DOM son ideales cuando los elementos están cerca unos de otros. Pero, ¿y si no lo están? ¿Cómo obtener un elemento arbitrario de la página?

// => querySelector, la llamada a elem.querySelector(css) devuelve el primer elemento para el selector CSS dado.
const elemento = document.querySelector('p')
console.log(elemento.style.border = '1px solid red')

// => querySelectorAll, sin duda el método más versátil, elem.querySelectorAll(css) devuelve todos los elementos dentro de elem que coinciden con el selector CSS dado.
const parrafos = Array.from(document.querySelectorAll('p'))

console.log(parrafos)
for (let p of parrafos) {
  p.style.border = '1px solid red'
}

// => Existe además una variable global nombrada por el id que hace referencia al elemento: 

// btn.style.backgroundColor = 'green'

const boton = document.getElementById('btn')
boton.style.backgroundColor = 'orange'

// => Generalmente no es una buena práctica. Puede haber conflictos de nombres. Además, cuando uno lee el código de JS y no tiene el HTML a la vista, no es obvio de dónde viene la variable. En la vida real document.getElementById es el método preferente.

// => getElementsBy*, hay otros métodos que permiten buscar nodos por una etiqueta, una clase, etc.

// => Todos los métodos "getElementsBy*" devuelven una colección viva (live collection). Tales colecciones siempre reflejan el estado actual del documento y se “auto-actualizan” cuando cambia.

// => errores comunes:
// => ¡No olvides la letra "s"!
// => ¡Devuelve una colección, no un elemento!

// => elem.getElementsByTagName(tag) busca elementos con la etiqueta dada y devuelve una colección con ellos. El parámetro tag también puede ser un asterisco "*" para “cualquier etiqueta”.
console.log(document.getElementsByTagName('p'))

// => elem.getElementsByClassName(className) devuelve elementos con la clase dada.
console.log(document.getElementsByClassName('parrafo'))

// => document.getElementsByName(name) devuelve elementos con el atributo name dado, en todo el documento. Muy raramente usado.
console.log(document.getElementsByName('name'))

// => Los más utilizados son querySelector y querySelectorAll, pero getElementBy* puede ser de ayuda esporádicamente o encontrarse en scripts antiguos.

// => Los métodos anteriores consistían en buscar en el DOM.
document.addEventListener('click', (e) => {
  // console.log(e.target)

  // => matches, el elem.matches(css) no busca nada, sólo comprueba si el elem coincide con el selector CSS dado. Devuelve true o false.
  if (e.target.matches('#btn')) {
    console.log(e.target)
  }

  // => closest, el método elem.closest(css) busca el ancestro más cercano que coincide con el selector CSS. El propio elem también se incluye en la búsqueda.
  if (e.target.closest('#btn')) {
    console.log(e.target)
  }
})

// => Un método más para comprobar la relación hijo-padre, ya que a veces es útil:
const ul = document.querySelector('ul')
const li = ul.querySelector('li')

console.log(ul)
console.log(li)

console.log(ul.contains(li))