/* Suma numeros a 1 hasta n... */

const sumaNumeros = (n) => {
  let contador = 0;

  for (let i = 0; i <= n; i++) {
    contador = i + contador;
  }

  return contador;
};

console.log(sumaNumeros(4));
