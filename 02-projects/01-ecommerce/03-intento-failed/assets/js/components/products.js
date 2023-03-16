import productos from "../database/index.js";
console.log(productos);

/* Seleccionamos nodo */
const pintarProducto = document.getElementById("productosContenedor");

function pintarProductos() {
  let html = "";

  for (let { id, name, image, price, stock } of productos) {
    html += `
      <div>
      <img src="${image}">
      <h4>${name}</h4>
      <p>Price: ${price}</p>
      <p>Cantidad: ${stock}</p>
      <button type="button" class="agregar" data-id="${id}">Agregar</button>
        
      </div>
    `;
    pintarProducto.innerHTML = html;
  }
}

export default pintarProductos;
