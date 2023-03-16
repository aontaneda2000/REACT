/* 3 Logica de la aplicacion */
import dbproductos from "../database/index.js";
console.log(dbproductos);

/* 4 Buscar el elementoo enel DOM */

const productosContenedor = document.getElementById("productosContenedor");

/* 5Pintamos los productos en el DOM */
function pintarProductos() {
  /* 6 creamos una varible para almacenar los productos */
  let html = "";

  /* 7 recorer arreglo de objetos y destructuracion */
  for (const { id, name, image, price, stock } of dbproductos) {
    html += `
    <div>
      <img src="${image}" alt="${name}">
      <div>
        <h2>${name} - $${price}</h2>
        <p>Cantidad: ${stock} </p>
      <div>
        <button type="button" class="agregar" data-id="${id}">Agregar</button>
      </div>
        </div>
      </div>
    `;
  }

  /* 8 Pintar el template que se construyo */
  productosContenedor.innerHTML = html;
}
/* 9 Ejcutar funcion para verificar que se pinten los productos y exportar a main */
export default pintarProductos;
