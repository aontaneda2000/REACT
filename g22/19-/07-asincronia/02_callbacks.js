/***************************************/
/* ASYNC ==> Asincronía con callbacks */
/**************************************/
/* Las funciones callback pueden utilizarse como un primer intento de manejar la asincronía en un programa. De hecho, eran muy utilizadas en la época dorada de jQuery. */

// sincrono (sync)
function operacion() {
  return 2 + 3
}

function resultado(cb) {
  const resultado = cb()
  return resultado
}

// console.log(resultado(operacion))

// asincrono (async)
function obtenerDatos(pintarDatos) {
  console.log('#1 relizar la petición')

  window.setTimeout(() => {
    console.log('#2 Llegan los datos')
    pintarDatos()
  }, 1000)
}

// function pintarDatos() {
//   console.log('#3 Pintando los datos en el DOM')
// }

// obtenerDatos(() => {
//   console.log('#3 Pintando los datos en el DOM')
// })

// obtenerDatos()
// pintarDatos()

obtenerDatos(() => {
  console.log('#3 Pintando los datos en el DOM')
  obtenerDatos(() => {
    console.log('#3 Pintando los datos en el DOM')
    obtenerDatos(() => {
      console.log('#3 Pintando los datos en el DOM')
      obtenerDatos(() => {
        console.log('#3 Pintando los datos en el DOM')
        obtenerDatos(() => {
          console.log('#3 Pintando los datos en el DOM')
          obtenerDatos(() => {
            console.log('#3 Pintando los datos en el DOM')
            obtenerDatos(() => {
              console.log('#3 Pintando los datos en el DOM')
              obtenerDatos(() => {
                console.log('#3 Pintando los datos en el DOM')
                obtenerDatos(() => {
                  console.log('#3 Pintando los datos en el DOM')
                  obtenerDatos(() => {
                    console.log('#3 Pintando los datos en el DOM')
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
