import productos from "../database/index.js";

let articulos = [];

const articulosContenedor = document.getElementById("articulosContenedor");

function pintarArticulos() {
  let html = "";

  for (const articulo of articulos) {
    html = `
      <div>
      <h2>${articulo.name} - ${articulo.price}</h2>
      <img src="${articulo.image}" alt="">
      <button class="remover" data="${id}">-</button>
      <p>Cantidad: ${articulo.stock}</p>
      <button class="agregar" data="${id}">+</button>
    </div>
    `;
  }
  articulosContenedor.innerHTML = html;
}

function agregarArticulo() {}

export default pintarArticulos;
