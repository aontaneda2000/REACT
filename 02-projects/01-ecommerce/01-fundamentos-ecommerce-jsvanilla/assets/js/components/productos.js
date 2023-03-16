import dbproducts from "../database/index.js";
// console.log(db);

/* Seleccionar nodo donde se  pintar los productos */
const productosContenedor = document.getElementById("productosContenedor");

function pintarProductos() {
  let html = ``;

  for (const product of dbproducts) {
    console.log(product);
    html += `
      <div>
      <p><b>Nombre:</b> ${product.name} </p>
      <img src=${product.image} alt="" />
      
      <p><b>Precio:</b> $${product.price} </p>
      <p><b>Cantidad:</b> ${product.stock} </p>
      </div>
    `;
  }
  productosContenedor.innerHTML = html;
}
export default pintarProductos;
