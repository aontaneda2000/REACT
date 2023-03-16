import pintarProductos from "./components/products.js";
/* 1 */
import { agregarArticulos, pintarArticulos } from "./components/carrito.js";
// console.log(productos);

/* 3 seleccionar DEL DOM */
const productosContenedor = document.getElementById("productosContenedor");

const articulosContenedor = document.getElementById("articulosContenedor");

document.addEventListener("DOMContentLoaded", (e) => {
  pintarProductos();

  /* 2 pintar los articulos */
  pintarArticulos();

  productosContenedor.addEventListener("click", (e) => {
    /* 1 */
    const target = e.target;
    /* 2 si es true */
    if (target.classList.contains("agregar")) {
      /* 3 */
      const id = target.dataset.id;
      agregarArticulos(+id, 1);
      // console.log(typeof +id);
    }
    pintarArticulos();
  });

  articulosContenedor.addEventListener("click", (e) => {});
});
