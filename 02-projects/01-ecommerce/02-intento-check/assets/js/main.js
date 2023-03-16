/* 1 */
import pintarProductos from "./components/producto.js";
/* 4 */
import {
  pintarArticulos,
  agregarArticulo,
  removerArticulo,
  removerTodo,
  vaciarCarrito,
  comprar,
  articulos,
} from "./components/carrito.js";

/* 5 */
const articulosContenedor = document.getElementById("articulosContenedor");
/* 6 */
const productosContenedor = document.getElementById("productosContenedor");

/*  10*/
const btnsAcciones = document.getElementById("btnsAcciones");

/* 2 */
document.addEventListener("DOMContentLoaded", () => {
  /* 3 */
  pintarProductos();

  /* 7 Pintar articulos */
  pintarArticulos();

  /* 8 */
  productosContenedor.addEventListener("click", (e) => {
    /* 1 */
    const target = e.target;
    /* 2 si es true */
    if (target.classList.contains("agregar")) {
      /* 3 */
      const id = target.dataset.id;
      agregarArticulo(+id, 1);
      // console.log(typeof +id);
    }
    pintarArticulos();
  });

  /* 9 */
  articulosContenedor.addEventListener("click", (e) => {
    /* 1 */
    const target = e.target;
    /* 2 si es true */
    if (target.classList.contains("remover")) {
      /* 3 */
      const id = target.dataset.id;
      removerArticulo(+id, 1);
    }
    if (target.classList.contains("agregar")) {
      /* 3 */
      const id = target.dataset.id;
      agregarArticulo(+id, 1);
      // console.log(typeof +id);
    }
    if (target.classList.contains("removerTodo")) {
      /* 3 */
      const id = target.dataset.id;
      removerTodo(+id);
      // console.log(typeof +id);
    }

    pintarArticulos();
  });

  /* 11 */
  btnsAcciones.addEventListener("click", (e) => {
    /* 1 */
    const target = e.target;

    if (target.classList.contains("limpiar")) {
      console.log("click");
      vaciarCarrito();
      // console.log(typeof +id);
    }
    if (target.classList.contains("comprar")) {
      console.log("click");
      if (articulos.length > 0) {
        comprar();
        pintarProductos();
      } else {
        window.alert("no hay articulos agrege unos cuantos");
      }

      // console.log(typeof +id);
    }

    pintarArticulos();
  });
});
