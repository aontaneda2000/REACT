/* Cuenta las veces que se repite una letra

La función countLetter() recibe como parámetros dos strings:

El primer string es una frase cualquiera.

El segundo string es una letra cualquiera.

Tu labor es encontrar cuántas veces se repite la letra en el string.

Ejemplo:
Si tu función recibe como frase "Hola, me llamo Erik" y como letra "a" debes retornar 2, ya que la letra "a" se encuentra 2 veces en la frase.

*Recuerda utilizar return para devolver tu solución.
*Tu solución debe de funcionar para cualquier frase y cualquier letra. */

function countLetter(phrase, letter) {
  console.log(phrase);
  let prahseLowerCase = phrase.toLowerCase();

  console.log(prahseLowerCase);
  // let objCounter = {}
  let counter = 0;

  for (let i = 0; i < phrase.length; i++) {
    console.log(phrase[i] === letter);
    if (phrase[i] === letter) {
      counter = counter + 1;
    }
  }
  console.log(counter);
}

countLetter("Hola, me llamo Erik", "a");
