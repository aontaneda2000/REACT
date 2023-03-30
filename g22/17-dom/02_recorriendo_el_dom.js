/***********************/
/* Recorriendo el DOM */
/**********************/
/* Dado un nodo del DOM, podemos ir recorriendolo O ACCEDIENDO A SUS ETIQUETAS utilizando las propiedades de navegación COMO:

Hay dos conjuntos principales de ellas:
  - Para todos los nodos: parentNode, childNodes, firstChild, lastChild,
   previousSibling
  nextSibling = trae el nodo siguiente -> espacio del salto de linea

  - Para los nodos elementos: parentElement, children, firstElementChild: DEVUELVE PRIMER ELEMENTO HIJO DEL BODY
  , lastElementChild, previousElementSibling, nextElementSibling. */


  // DEVUELVE ESPACIOS O 
console.log(document.body.firstChild.nextSibling.nextSibling.nextSibling.previousSibling.previousSibling.parentNode)

// DEVUELVE NODO SEGUN LO QUE SE ESPECIFICA
console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.textContent)

console.log(document.body.childNodes) // => DEVUELVE UNA La colección childNodes enumera todos los nodos hijos, incluidos los nodos de texto.


/* DEVUELVE NODOS DEL DOCUMENTO */
console.log(document.body.children)

/* RECORRER LOS NODOS HIJOS DEL NODO BODY */
for (let el of document.body.children) {
  // console.log(el.style.color = 'red')
  // AGREGAR COLOR
}

// => Colecciones, childNodes parece un array. Pero realmente no es un array, sino más bien una colección – un objeto especial iterable, simil-array.

// METODO ARRAY.FROM CONVIERTE A UN ARREGLO
const arrayElements = Array.from(document.body.children)

arrayElements.forEach(element => {
  console.log(element.style.color = 'blue')
})

const array = ['a', 'b', 'c']

console.log(array.map(x => x.toUpperCase()))



// HTMLCOLECCTION Y NODELIST