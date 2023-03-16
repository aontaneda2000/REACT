/* 1 */
import productos from "../database/index.js";

/* 2 Creamos un nuevo arreglo vacio */
let articulos = [];

/* 3 Buscsar el elemento en el DOM */
const articulosContenedor = document.getElementById("articulosContenedor");

/* 10 */
const precioTotal = document.getElementById("precioTotal");

/*  4 pintamos los articulos en el carrito */

function pintarArticulos() {
  /* 5 creamos una variable para almacenar despues los articulos */
  let html = "";
  /* 6 recorremos el array de articulos para pintar el carrito */
  for (const articulo of articulos) {
    const productoFiltrado = productos.find(
      (producto) => producto.id === articulo.id
    );

    const { id, name, image, price, stock } = productoFiltrado;
    html += `
    <div>
      <img src="${image}" alt="${name}">
      <div>
        <h2>${name} - $${articulo.stock * price} x ${articulo.stock}</h2>
        <button class="remover" type="button" data-id="${id}">-</button>
        <span>${articulo.stock} </span>
        <button class="agregar" type="button" data-id="${id}">+</button>
      <div>
        <button class="removerTodo" data-id="${id}">Eliminar</button>
      </div>
        </div>
      </div>
    `;
  }
  console.log(articulos);
  /* pintamos finalmente los productos en el carrito */
  articulosContenedor.innerHTML = html;
  /* 11 pintar el total en el carrito */
  precioTotal.innerHTML = mostrarTotal();
}

/* 5 Funcion agregar articulo,  buscar id de ese producto para enviarlo a al arreglo articulo */
function agregarArticulo(id, stock) {
  const productoFiltrado = productos.find((producto) => producto.id === id);

  if (productoFiltrado && productoFiltrado.stock > 0) {
    /*  */
    const articuloFiltrado = articulos.find((articulo) => articulo.id === id);

    if (articuloFiltrado) {
      if (checarInventario(id, stock + articuloFiltrado.stock)) {
        articuloFiltrado.stock += stock;
      } else {
        window.alert("No hay suficiente stock");
      }
    } else {
      articulos.push({ id, stock });
    }
  } else {
    window.alert("Lo sentimos, no hay stock");
  }
}

/* 7 - */
function removerArticulo(id, stock) {
  const articuloFiltrado = articulos.find((articulo) => articulo.id === id);

  if (articuloFiltrado.stock - stock > 0) {
    articuloFiltrado.stock -= stock;
  } else {
    /* SI LLEGA A 0 */
    const confirmar = window.confirm(
      "Estas seguro de quieres remover el articulo"
    );

    if (confirmar) {
      articulos = articulos.filter((articulo) => articulo.id !== id);
    }
  }
}
/* 8 */
function removerTodo(id) {
  articulos = articulos.filter((articulo) => articulo.id !== id);
}

/* 6 Checamos en el inventario y le restamos a los productos*/
function checarInventario(id, stock) {
  const productoFiltrado = productos.find((producto) => producto.id === id);

  /* Restar la cantidad y Cuando llegue a 0 entrara en el else del if */
  return productoFiltrado.stock - stock >= 0;
}

/* 9 */

function mostrarTotal() {
  let total = 0;
  for (const articulo of articulos) {
    const productoFiltrado = productos.find(
      (producto) => producto.id === articulo.id
    );

    total += articulo.stock * productoFiltrado.price;
  }
  // return total
  return `$${total}`;
}

/* 11 */
function vaciarCarrito() {
  articulos = [];
}

function comprar() {
  for (const articulo of articulos) {
    const productoFiltrado = productos.find(
      (producto) => producto.id === articulo.id
    );

    productoFiltrado.stock -= articulo.stock;
  }
  vaciarCarrito();
  window.alert("Gracias por su compra");
}

export {
  pintarArticulos,
  agregarArticulo,
  removerArticulo,
  removerTodo,
  vaciarCarrito,
  comprar,
  articulos,
};
