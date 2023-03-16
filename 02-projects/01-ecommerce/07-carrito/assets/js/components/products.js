import productos from "../database/index.js";

const productosContenedor = document.getElementById("productosContenedor");

function pintarProductos() {
  let html = "";

  for (const { id, image, name, price, stock } of productos) {
    html += `
    <div>
      <p>${name} - ${price}</p>
      <img src="${image}">
      <p>Cantidad: ${stock}</p>
      <button class="agregar" data-id="${id}">Agregar</button>
    </div>
    `;
  }

  productosContenedor.innerHTML = html;
}

export default pintarProductos;
