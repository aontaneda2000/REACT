import productos from "../database/index.js";
console.log(productos);

const productosContenedor = document.getElementById("productosContenedor");

function pintarProductos() {
  let html = "";

  for (const { id, name, image, price, stock } of productos) {
    html += `
    <div>
      <p>${name} - ${price}</p>
      <img src="${image}">
      <p>Cantidad: ${stock}</p>
      <button data-id="${id}">Agregar</button>
    </div>
   `;
    productosContenedor.innerHTML = html;
  }
}

export default pintarProductos;
