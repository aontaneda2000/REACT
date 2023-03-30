/*******************************/
/* Introducción a los Eventos */
/******************************/
// => Para reaccionar con eventos podemos asignar un handler (controlador) el cual es una función que se ejecuta en caso de un evento.

/* Controladores de eventos (Event Handlers) */
/* Hay tres formas de asignar handlers:
  - Atributos HTML: onclick="...".
  - Propiedades del DOM: elem.onclick = function.
  - Métodos: elem.addEventListener(event, handler[, phase]) para agregar ó removeEventListener para remover. */

// => 1) Atributo HTML. Un handler puede ser establecido en el HTML con un atributo llamado on<event>.

function showMessage() {
  window.alert('Saludando desde atributo HTML')
}

// => 2) Propiedad del DOM. Podemos asignar un handler usando una propiedad del DOM on<event>.

/* Hay dos formas de pasar un handler:
  - Como una función: handler.
  - Como una función anónima: function() {...}. */

// FORMA 1
function handler() {
  window.alert('Saludando desde pripiedad del DOM')
}

prop.onclick = handler

// FOMRA 2
prop.onclick = function () {
  window.alert('Saludando desde pripiedad del DOM')
}

// => 3) Métodos. Podemos usar el método addEventListener para agregar un handler a un elemento.
/* La sintaxis para agregar un handler:
  - event: Nombre del evento.
  - handler: La función handler.
  - options: Un objeto adicional, con las propiedades:
    - once: si es true entonces el listener se remueve automáticamente después de activarlo.
    - capture: la fase en la que se controla el evento, options también puede ser false/true, lo que es igual a {capture: false/true}.
    - passive: si es true entonces el handler no llamará a preventDefault(). */

// forma 1
// function foo(event) {
//   console.log(event.type)
//   console.log(event)
// }

// document.addEventListener('click', foo)

// forma 2

content.addEventListener('click', (event) => {
  // Objeto del Evento. Cuando un evento ocurre, el navegador crea un objeto del evento que coloca los detalles dentro y los pasa como un argumento al handler.

  // console.log(event.type)
  // console.log(event)

  // => Elemento objetivo (target). El elemento que realmente inició el evento.
  console.log('El que originó el evento', event.target)
  console.log('El elemento que tiene el escuchador', event.currentTarget)
})