/*************************************/
/* MÉTODOS EN PRIMITIVOS ==> STRING */
/************************************/
// => Los métodos de strings son métodos que se pueden usar con cadenas de texto
const str = "Hola soy una cadena de texto";

console.log(str[28]);
console.log(str[str.length - 1]);

// charAt(indíce) Devuelve el carácter en la posición especificada, si no existe devuelve una cadena vacía.
console.log(str.charAt());
console.log(str.charAt(0));
console.log(str.charAt(15));
console.log(str.length);
console.log(str.charAt(28));
console.log(str.charAt(-1));

// at(indíce) Devuelve el carácter en la posición especificada, si no existe devuelve undefined. Este método permite enteros positivos y negativos. Los enteros negativos cuentan de nuevo desde el último carácter de cadena.
console.log(str.at());
console.log(str.at(0));
console.log(str.at(15));
console.log(str.at(28));
console.log(str.at(-1));

// indexOf(valor, indíce) Devuelve la posición del primer carácter de la cadena especificada, si no existe devuelve -1.
console.log(str.indexOf("e"));

console.log(str[21]);

const primerIndice = str.indexOf("e");
const segundoIndice = str.indexOf("e", primerIndice + 1);

console.log(segundoIndice);
// const char = str.charAt(indice)
// console.log(char)

console.log(str.charAt(str.indexOf("e")));

// lastIndexOf(valor, indíce) Devuelve la posición del último carácter de la cadena especificada, si no existe devuelve -1. Busca desde la derecha a la izquierda
const index = str.lastIndexOf("e", 23);
console.log(index);

// includes(valor, indíce) Devuelve true si la cadena especificada está contenida en la cadena, o false si no está.
console.log(str.includes("H"));

// startsWith(valor, indíce) Devuelve true si la cadena especificada está al inicio de la cadena, o false si no está.
console.log(str.startsWith("Hola"));

// endsWith(valor, indíce) Devuelve true si la cadena especificada está al final de la cadena, o false si no está.
const correo = "miguel@htomail.com";

console.log(correo.endsWith("@academlo.com"));

// => Mayúsculas y minúsculas
// toUpperCase() - Devuelve la cadena en mayúsculas.
console.log(str.toUpperCase());

const strMay = str.toUpperCase();

// toLowerCase() - Devuelve la cadena en minúsculas.
console.log(strMay.toLowerCase());

// => Extraer un trozo de una cadena

// substring(indíceInicial, indíceFinal) Devuelve la parte del string entre comienzo y final.
console.log(str.substring(0, 4));
console.log(str.substring(4, 0)); //no recomendado dev cadena completo
console.log(str.substring(-1)); //no se puede utilizar numeros negativos

// slice(indíceInicial, indíceFinal) Retorna la parte del string desde comienzo hasta (pero sin incluir) final. recomendado
console.log(str.slice(0, 4));
console.log(str.slice(4, 0)); //string vacio
console.log(str.slice(-5));

// => División de cadenas
// split(separador, limite) Devuelve un array con las partes de la cadena que se separan por el separador especificado.
// const cadena = 'entrevista-a-los-influencer-mas-famosos'
console.log(str.split(" ", 2));
// console.log(cadena.split('-').join(' '))

//segunda palabra
console.log(str.indexOf(" ", 5));

const text = "Hola, me llamo Erik";
console.log(text.split(" "));
console.log(text.indexOf(" ", 5));

console.log(text);

const ultimoEspacio = text.lastIndexOf(" ");
console.log(ultimoEspacio);

const recortarUltimaPalabra = text.slice(ultimoEspacio).trim();
console.log(recortarUltimaPalabra.length);

console.log(text.slice(ultimoEspacio));

console.log(text.lastIndexOf(" "));
