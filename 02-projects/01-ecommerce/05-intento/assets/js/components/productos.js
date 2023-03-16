import productos from "../database/index.js";

const productosContenedor = document.getElementById("productosContenedor");

function pintarProductos() {
  let html = "";

  for (const { id, name, image, price, stock } of productos) {
    html += `
    <div>
    <h1>Name:${name} $${price} </h1>
    <img src="${image}">
    <p>Cantidad: ${stock}</p>
    <button data-id="${id}">Agregar</button>
    </div>
    `;
  }

  productosContenedor.innerHTML = html;
}
export default pintarProductos;
