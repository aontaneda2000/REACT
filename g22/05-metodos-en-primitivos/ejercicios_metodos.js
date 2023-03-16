// => Ejericios de métodos en primitivos
// 1. Escribe una función que reciba un string y retorne la primera palabra de la cadena.
const text = "Hola mundo";

const firstWord = (text) => {
  // tu código aquí

  /* 
  const index = text.indexOf(' ');
  const cutWord = text.slice(0, index)
  return cutWord

*/

  return text.split(" ")[0];
};

console.log(firstWord(text));

// 2. Escribe una función que reciba un string y retorne la última palabra de la cadena.
const lastWord = (text) => {
  // tu código aquí
  const lastWord = text.split(" ");

  return lastWord[lastWord.length - 1];
};

console.log(lastWord(text));

// 3. Escribe una función que reciba un string y retorne la cantidad de palabras que contiene.
const wordsCount = (text) => {
  // tu código aquí
  return text.split(" ").length;
};

console.log(wordsCount(text));

// 4. Escribe una función que compruebe si el correo electrónico que recibe como parámetro es termina en @academlo.com
const email = "juan@academlo.com";

const isAcademloEmail = (email) => {
  // tu código aquí
  return email.endsWith("@academlo.com");
};

console.log(isAcademloEmail(email));

// 5. Escribe una función que reciba como parámetro una frase y una palabra y deberas reemplazar la última palabra de la frase.
const phrase = "Estoy aprendiendo JavaScript en Linea";
const word = "Academlo";

const replaceLastWord = (phrase, word) => {
  // tu código aquí
  const lastWord = phrase.lastIndexOf(" ");
  const save = phrase.slice(lastWord);
  const replaceWord = phrase.replace(save, word);
  return replaceWord;

  /* FORMA 2 */
  const lastWord2 = phrase.split();

  lastWord2[lastWord2.length - 1] = word;
  lastWord2.join(" ");
};

console.log(replaceLastWord(phrase, word));

// 6. Escribe una función que reciba como parámetro una frase y deberas retornar la longitud de la última palabra.
const phrase2 = "Estoy aprendiendo JavaScript en Academlo";

const phraseLength = (phrase) => {
  // tu código aquí
  const arrayPhrase = phrase.split(" ");
  console.log(arrayPhrase);

  const lastWord = arrayPhrase[arrayPhrase.length - 1];
  console.log(lastWord);
  return lastWord.length;
};

console.log(phraseLength(phrase2));

// 7. Resuelve el siguiente problema: intentamos obtener el total de la compra de un usuario, pero el precio de los productos no está en un formato que nos permita sumarlos. ¿Cómo podríamos resolver este problema?

const item1price = "$10.00";
const item2price = "$10.00";
const item3price = "$10.00";

const total = item1price + item2price + item3price;
console.log(total);

function format(price) {
  // tu código aquí
}

console.log(format());

// 8. Define una función que regrese un número aleatorio entre 1 y 10.
function random() {
  // tu código aquí
  return Math.floor(Math.random() * 10) + 1; // +1 para q vaya del 1 al 10
}

console.log(random());

// 9. Cual es el resultado de las siguientes operaciones:
// console.log(Math.floor(10.5));
// console.log(Math.ceil(10.5));
// console.log(Math.round(10.5));

// 10. Resuelve el siguiente problema: el formato de la hora en un reloj digital tiene este formato 00:00:00, es decir, las horas, minutos y segundos están representados por dos dígitos. ¿Cómo podríamos resolver este problema?
const hours = 4;
const minutes = 7;
const seconds = 9;

const time = null; // tu código aquí
console.log(time);
