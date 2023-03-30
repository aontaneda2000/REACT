/***********************/
/* Recorriendo el DOM */
/**********************/
/* Dado un nodo del DOM, podemos ir recorriendolo utilizando las propiedades de navegación.

Hay dos conjuntos principales de ellas:
  - Para todos los nodos: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.

  - Para los nodos elementos: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling. */

console.log(document.body.firstChild.nextSibling.nextSibling.nextSibling.previousSibling.previousSibling.parentNode)

console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.textContent)

console.log(document.body.childNodes) // => La colección childNodes enumera todos los nodos hijos, incluidos los nodos de texto.

console.log(document.body.children)

for (let el of document.body.children) {
  // console.log(el.style.color = 'red')
}

// => Colecciones, childNodes parece un array. Pero realmente no es un array, sino más bien una colección – un objeto especial iterable, simil-array.
const arrayElements = Array.from(document.body.children)

arrayElements.forEach(element => {
  console.log(element.style.color = 'blue')
})

const array = ['a', 'b', 'c']

console.log(array.map(x => x.toUpperCase()))
