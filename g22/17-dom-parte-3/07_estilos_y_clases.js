/*********************/
/* Estilos y Clases */
/********************/
// => 1)Clases:

// => elem.className y elem.classList

// => elem.className, reemplaza toda la cadena de clases.
const h1 = document.querySelector('h1')

h1.className = 'sapito clase2'

console.log(h1)

// => A veces es lo que necesitamos, pero a menudo queremos agregar o eliminar una sola clase.

// => El elem.classList es un objeto especial con métodos para agregar, eliminar y alternar (add/remove/toggle) una sola clase.

console.log(h1.classList)

// add agregar
h1.classList.add('break')

// remove remover
h1.classList.remove('sapito')

// toggle alternar
h1.classList.toggle('break')
h1.classList.toggle('span3')

console.log(h1)

const altura = 200
// => 2)Estilos:
// console.log(h1.style.backgroundColor = '#222')
// h1.style.height = altura + 'px'
// h1.style.height = `${altura}px`

// => Para establecer todo el estilo como una cadena, hay una propiedad especial: style.cssText:
h1.style.cssText = `background-color: red; height: ${altura}px`

setInterval(() => {
  const date = new Date()
  console.log(date.toLocaleTimeString())
}, 1000)