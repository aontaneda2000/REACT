/****************************/
/* Atributos y Propiedades */
/***************************/
// => Atributos HTML
/* Los atributos HTML tienen las siguientes características:
- Su nombre no distingue entre mayúsculas y minúsculas (id es igual a ID).
- Sus valores son siempre strings. */

// ECOMMERCE 3 === '3'

/* Todos los atributos son accesibles usando los siguientes métodos:
- elem.hasAttribute(nombre) – comprueba si existe.
- elem.getAttribute(nombre) – obtiene el valor.
- elem.setAttribute(nombre, valor) – establece el valor.
- elem.removeAttribute(nombre) – elimina el atributo.
Estos métodos funcionan exactamente con lo que está escrito en HTML. */




const parrafo = document.querySelector('.parrafo')
const root = document.querySelector('#root')
const h1 = document.querySelector('h1')

// hasAttribute(nombre) – comprueba si existe.
console.log(parrafo.hasAttribute('class'))
console.log(parrafo.hasAttribute('id'))

// getAttribute(nombre) – obtiene el valor.
console.log(parrafo.getAttribute('class'))
console.log(root.getAttribute('class'))

// .setAttribute(nombre, valor) – establece el valor.
h1.setAttribute('class', 'title text-primary')

// removeAttribute(nombre) – elimina el atributo.
// root.removeAttribute('class')

// .attributes Es un objeto que obtiene los atributos del elemento en cuestion
console.log(root.attributes)

const element = document.getElementById('standard')

console.log(element.getAttribute('custom'))
console.log(element.dataset)

const span = document.querySelector('#standard span')
console.log(span.dataset.id)



/*
=======ATRIBUTOS PERSONALIZADO CON DATA-

utilizando data- en html  */

// dataset: devuelve los atributos personalizados