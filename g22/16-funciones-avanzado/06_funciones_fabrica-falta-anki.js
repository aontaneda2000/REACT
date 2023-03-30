/*************************/
/* Funciones de Fábrica */
/************************/
// => Una función de fábrica es cualquier función que no es una clase o constructor que devuelve un objeto (presumiblemente nuevo).

function makeCrud(nombre) {
  let usuarios = []

  return {
    nombre: nombre,
    create(usuario) {
      usuarios.push(usuario)
    },
    read(cb) {
      cb(usuarios)
    },
    update(usuario) {
      usuarios = usuarios.map(u => u.nombre === usuario.nombre ? usuario : u)
    },
    delete(usuario) {
      usuarios = usuarios.filter(u => u.nombre !== usuario.nombre)
    }
  }
}

const gen22 = makeCrud('Generación 22')
const gen23 = makeCrud()

gen22.create({ nombre: 'Osmar' })
gen22.create({ nombre: 'Pierina' })

gen22.read((arr) => {
  console.log(arr)
})

gen22.update({ nombre: 'Osmar', edad: 25 })
gen22.update({ nombre: 'Pierina', correo: 'pierina@correo.com' })

gen22.read((arr) => {
  console.log(arr)
})

console.log(gen22.nombre)

gen23.create({ nombre: 'Juan' })
gen23.create({ nombre: 'Osmar' })
gen23.create({ nombre: 'Victor' })
gen23.create({ nombre: 'Pierina' })

gen23.read((arr) => {
  console.log(arr)
})

gen23.delete({ nombre: 'Victor' })

gen23.create({ nombre: 'Victor' })

gen23.read((arr) => {
  console.log(arr)
})
