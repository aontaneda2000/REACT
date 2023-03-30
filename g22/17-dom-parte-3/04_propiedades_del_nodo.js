/*************************/
/* Propiedades del nodo */
/************************/
// => Un objeto generalmente tiene la propiedad constructor. Hace referencia al constructor de la clase, y constructor.name es su nombre:

console.log(document.body.constructor.name)
console.log(document.body.firstElementChild.constructor.name)

console.log(document.body.firstChild.nodeName)
console.log(document.body.tagName)
console.log(document.body.firstElementChild.tagName)

// => La propiedad nodeType proporciona una forma “anticuada” más de obtener el “tipo” de un nodo DOM.

console.log(document.body.firstChild.nodeType)

// => La propiedad innerHTML permite obtener el HTML dentro del elemento como un string. También podemos modificarlo.
const inner = document.querySelector('.parrafo1')

console.log(inner)

inner.innerHTML = '<h4>Hola</h4>'

console.log(inner.textContent)

// => La propiedad outerHTML contiene el HTML completo del elemento. Eso es como innerHTML más el elemento en sí.
const outer = document.querySelector('.parrafo2')

console.log(outer)

outer.outerHTML = '<span>Pokemon</span>'

console.log(outer.textContent)

// => textContent solo se devuelve texto, como si todas las <etiquetas> fueran recortadas, pero el texto en ellas permaneció. En la práctica, rara vez se necesita leer este tipo de texto.
console.log(document.body.children[2].firstElementChild.textContent)

// document.body.children[2].firstElementChild.textContent = '<h4>Hola</h4>'

// => Otros tipos de nodos, como los nodos de texto, tienen su contraparte: propiedades nodeValue y data

console.log(document.body.childNodes[1].nodeValue)

// => El atributo “hidden” y la propiedad DOM especifican si el elemento es visible o no.
document.querySelector('h1').hidden = false