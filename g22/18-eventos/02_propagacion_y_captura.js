/**************************/
/* Propagación y captura */
/*************************/
/* El estándar de eventos del DOM describe 3 fases de la propagación de eventos:
  - Fase de captura – el evento desciende al elemento.
  - Fase de objetivo – el evento alcanza al elemento.
  - Fase de propagación – el evento se propaga hacia arriba del elemento. */

// => Detener la propagación
// El método event.stopPropagation() y su hermano event.stopImmediatePropagation() también pueden ser llamados en la fase de captura. En este caso no solo se detienen las capturas sino también la propagación.

for (let elem of document.querySelectorAll('.fases *')) {

  // Agregar escuchadores a cada elemento
  // propagación p → div → form.
  elem.addEventListener('click', (e) => {
    e.stopPropagation()
    window.alert('prop ' + elem.tagName)
  })

  // Captura form → div → p.
  elem.addEventListener('click', (e) => {
    e.stopPropagation()
    window.alert('cap ' + elem.tagName)
  }, true)
}

// => La propagación y captura ponen los cimientos para “delegación de eventos”: un extremadamente poderoso patrón de manejo de eventos. No la detengas sin una necesidad real porque no podemos realmente asegurar que no lo necesitaremos más adelante.