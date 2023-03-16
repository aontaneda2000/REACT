import productos from "../database/index.js";

console.log(productos);

const productosContenedor = document.getElementById("productosContenedor");

function pintarProductos() {
  let html = "";

  for (const { id, name, image, price, stock } of productos) {
    html += `
    <div>
      <h2>${name} - ${price}</h2>
      <img src="${image}" alt="">
      <p>Cantidad: ${stock}</p>
      <button class="agregar" data="${id}">Agregar</button>
    </div>
    
    `;
  }

  productosContenedor.innerHTML = html;
}

export default pintarProductos;
