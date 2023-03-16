import productos from "../database";

console.log(productos);

let articulos = [];

const articulosContenedor = document.getElementById("articulosContenedor");

function pintarCarrito() {
  let html = "";

  for (const articulo of articulos) {
    const productoFiltrado = productos.find(
      (producto) => producto.id === articulo.id
    );

    const { id, name, price, stock, image } = productoFiltrado;

    html += `
      <div>
        <p>${name} $${price}</p>
        <img src="${image}">
        <button class="remover" data-id="${id}">-</button>
        <p>Cantidad${stock}</p>
        <button class="agregar" data-id="${id}">+</button>
      </div>
    
     `;
    articulosContenedor.innerHTML = html;
  }
}

/* Pasar el id para buscar el producto dentro de la bd para enviarlo al arreglo articulos */
function agregarCarrito(id, stock) {
  // 1. buscar y filtrar producto en la bd mediante el id que se recibe en esta funcion cuando se de click en agregar
  const productoFiltrado = productos.find((producto) => producto.id === id);

  // 2. Revisar que tengamos stock o existen en el inventario
  if (productoFiltrado && productoFiltrado.stock > 0) {
    // 3. Si el articulo no esta lo agregamos, pero si ya esta lo aumentamos la cantidad
    const articuloFiltrado = articulos.find((articulo) => articulo.id === id);

    if (articuloFiltrado) {
      // Si la cantidad no supera el stock, aumentamos la cantidad, si no mostramos un mensaje: 1 ++ incrementa la cantidad
      if (checarInventario(id, stock + articuloFiltrado.cantidad)) {
      } else {
        window.alert(" No hay suficiente en stock");
      }
    } else {
      articulos.push({ id, stock });
    }
  } else {
    window.alert("Lo sentimos No hay stock");
  }
}

function checarInventario() {
  const productoFiltrado = productos.find();
}

export { pintarCarrito };
