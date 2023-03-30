/**************************/
/* Entorno del navegador */
/*************************/
// Objeto window
// Tiene dos roles:

// => 1) Objeto global
console.log(window)

// => 2) Representa la ventana del navegador y proporciona propiedades y métodos para trabajar con ella.

// => BOM (Modelo de Objetos del Navegador) son objetos, propiedades y métodos adicionales proporcionados por el navegador (entorno host) para trabajar con todo excepto el documento.

// => Propiedades
console.log('Ancho del navegador', window.innerWidth)
console.log('Alto del navegador', window.innerHeight)

// => Métodos
// alert
// window.alert('Hola soy un mensaje')

// Podemos agregar propiedades y métodos a window
window.nombre = function () {
  window.alert('Hola soy yo de nuevo')
}

// prompt
// const respuesta = window.prompt('¿Como te llamas?')
// if (respuesta) console.log(respuesta)

// confirm
// const respuesta = window.confirm('¿Ir a goolge?')
// console.log(respuesta)
// if (respuesta) window.location.href = 'https://google.com'

// if (respuesta) window.open('https://google.com', 'Google')

// Objeto navigator
console.log(window.navigator)

// Objeto location
console.log(window.location)

// => DOM (Modelo de Objetos del Documento) la estructura de un documento HTML son las etiquetas, cada etiqueta HTML es un objeto, las etiquetas anidadas son llamadas “hijas” de la etiqueta que las contiene, el texto dentro de una etiqueta también es un objeto. Todos estos objetos representan todo el contenido de la página y son accesibles empleando JavaScript, y podemos usarlos para modificar la página.

console.log(document) // => El objeto document es el punto de entrada a la página.

// => Las etiquetas son nodos de elementos (o solo elementos) y forman la estructura del árbol: <html> está ubicado en la raíz del documento, por lo tanto, <head> y <body> son sus hijos, etc.
console.log('Estamos aquí:')
// HTML
console.log(document.documentElement) // HTML

// head
console.log(document.head)

// body
console.log(document.body)

// body {
//   style: {
//     color: '';
//   }
// }
// body.style.color = #fff

console.log(document.body.style)

// Usando el método setTimeout del objeto window para volver al fondo anterior
window.setTimeout(() => {
  document.body.style.backgroundColor = '#111'
  document.body.style.color = '#fff'
}, 3000)

window.setTimeout(() => {
  document.body.style.backgroundColor = ''
  document.body.style.color = ''
}, 5000)

// Doctype
console.log(document.doctype)

// clg
console.log(document.body)

// cdi
console.dir(document.body)
