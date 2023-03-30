/*****************************/
/* Modificando el documento */
/****************************/
// => Métodos para crear nuevos nodos, Para crear nodos DOM, hay dos métodos:

// => createElement() Crea un nuevo nodo elemento con la etiqueta HTML dada

// => createTextNode() Crea un nuevo nodo texto con el texto dado

// => Creando el elemento alert en 3 pasos:
// 1) Crear elemento <div>
let div = document.createElement('div')

// 2) Establecer su clase a "alert"
div.classList = 'alert'

// 3) Agregar el contenido
div.innerHTML = '<strong>Hola</strong> yo soy un alert!!!'

// => Hemos creado el elemento. Pero hasta ahora solamente está en una variable llamada div, y no la podemos ver en la página.

// => Métodos de Inserción y eliminación

// => hay un método especial append para ello:

// 1) Agregar un nodo al final de la lista de hijos
document.body.prepend(div)

/* Aquí hay más métodos de inserción, ellos especifican diferentes lugares donde insertar:
  - node.append(...nodos o strings) – agrega nodos o strings al final de node
  - node.prepend(...nodos o strings) – insert nodos o strings al principio de node
  - node.before(...nodos o strings) –- inserta nodos o strings antes de node
  - node.after(...nodos o strings) –- inserta nodos o strings después de node */

const ul = document.querySelector('ul')
console.log(ul)

// ul.before('Esto se mostrará antes del nodo ul')
// ul.after('Esto se mostrará depués del nodo ul')
// ul.prepend('Al principio dentro')
// ul.append('Al final dentro')

// => Para ello podemos usar otro métodos, muy versátil: elem.insertAdjacentHTML(where, html).

/* El primer parámetro es un palabra código que especifica dónde insertar relativo a elem. Debe ser uno de los siguientes:
  - "beforebegin" – inserta html inmediatamente antes de elem
  - "afterbegin" – inserta html en elem, al principio
  - "beforeend" – inserta html en elem, al final
  - "afterend" – inserta html inmediatamente después de elem */

ul.insertAdjacentHTML('beforebegin', '<h3>Esto se mostrará antes del nodo ul</h3>')
ul.insertAdjacentHTML('afterend', '<h3>Esto se mostrará depués del nodo ul</h3>')
ul.insertAdjacentHTML('afterbegin', '<li>Al principio dentro</li>')
ul.insertAdjacentHTML('beforeend', '<li>Al final dentro</li>')

// => Métodos para clonar nodos
const alert = document.querySelector('.alert')
console.log(alert)

const alert2 = alert.cloneNode(true)
console.log(alert2)

alert.after(alert2)

// => Para quitar un nodo, tenemos el método node.remove().
alert2.remove()