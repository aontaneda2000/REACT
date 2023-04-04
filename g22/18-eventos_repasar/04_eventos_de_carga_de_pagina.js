/*******************************/
/* Eventos de carga de página */
/******************************/
/* El ciclo de vida de una página HTML tiene tres eventos importantes:
  - DOMContentLoaded – el navegador HTML está completamente cargado y el árbol DOM está construido, pero es posible que los recursos externos como <img> y hojas de estilo aún no se hayan cargado.
  - load – no solo se cargó el HTML, sino también todos los recursos externos: imágenes, estilos, etc.
  - beforeunload/unload – el usuario sale de la pagina. */

// => Evento DOMContentLoaded – Se ejecuta cuando el documento HTML ha sido completamente cargado y analizado, sin esperar a hojas de estilo, imágenes y otros recursos externos para terminar de cargar.


// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOMContentLoaded, El arbol del DOM esta completamente cargado.')

//   // const h1 = document.querySelector('h1')
//   // console.log(h1)
// })

// => El evento load en el objeto widnow se dispara cuando se carga toda la página, incluidos estilos, imágenes y otros recursos externos: 

const loader = document.querySelector('.loader')

window.addEventListener('load', () => {
  loader.style.display = 'none'
  console.log('load, El arbol y los recursos estan completamente cargados.')
})

console.log('ejecuta este código')

// => readyState
// La propiedad document.readyState nos informa sobre el estado de carga actual.

// console.log('Estado de carga: ' + document.readyState)

/* Hay 3 valores posibles:
  - "loading" – el documento se está cargando.
  - "interactive" – el documento fue leído por completo.
  - "complete" – el documento se leyó por completo y todos los recursos (como imágenes) también se cargaron. */

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOMContentLoaded: ' + document.readyState)
// })

// window.addEventListener('load', () => {
//   console.log('load: ' + document.readyState)
// })