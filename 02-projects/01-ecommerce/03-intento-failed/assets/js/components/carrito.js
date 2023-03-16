import productos from "../database/index.js";

let articulos = [];

const articulosContenedor = document.getElementById("articulosContenedor");

function pintarArticulos() {
  let html = "";

  for (const articulo of articulos) {
    const productoFiltrado = productos.find((producto) => {
      producto.id === articulo.id;
    });

    const { id, name, image, price, stock } = productoFiltrado;
    html += `
      <div>
      <img src="${image}">
      <h4>${name}</h4>
      <p>Price: ${price}</p>
      <button class="remover" type="button" data-id="${id}">-</button>
      <p>Cantidad: ${stock}</p>
      <button class="agregar" type="button" data-id="${id}">+</button>
      <button data-id="${id}">Eliminar</button>
        
      </div>
    `;

    articulosContenedor.innerHTML = html;
  }
}

/* 2 recibe el id para buscar ese producto dentro de la bd y enviarlo al arreglo vacio */
function agregarArticulos(id, stock) {
  /* 1 */
  const productoFiltrado = productos.find((producto) => {
    producto.id === id;
  });

  /* 2 validar que tenemos stock del producto en la db */
  if (productoFiltrado && productoFiltrado.stock > 0) {
    /* 3 Si el articulo no esta, lo agregamos pero si ya esta aumentamos la cantidad */
    const articuloFiltrado = articulos.find((articulo) => {
      articulo.id === id;
    });
    /* 4 */
    if (articuloFiltrado) {
      /* 5 Si la cantidad no supera el stock,aumentamos la cantidad, si no mostramos unmensaje */
      /* 6 incrementando la cantidad con checar inventario */
      if (checarInventario(id, stock + articuloFiltrado.stock)) {
        articuloFiltrado.stock += stock;
      } else {
        window.alert("No hay suficiente stock");
      }
    } else {
      articulos.push({ id, stock });
    }
  } else {
    window.alert("Lo sentimos no hay stock");
  }
}

function checarInventario(id, stock) {
  const productoFiltrado = productos.find((producto) => {
    producto.id === id;
    return productoFiltrado.stock - stock >= 0;
  });
}
export { pintarArticulos, agregarArticulos };
