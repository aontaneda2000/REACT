/*************************************/
/* MÉTODOS EN PRIMITIVOS ==> STRING */
/************************************/
// => Los métodos de strings son métodos que se pueden usar con cadenas de texto
const str = "Hola soy una cadena de texto";

console.log(str.length - 1);
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

// lastIndexOf(valor, indíce) Devuelve la posición del último carácter de la cadena especificada, si no existe devuelve -1.
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
console.log(str.substring(4, 0));
console.log(str.substring(-1));

// slice(indíceInicial, indíceFinal) Retorna la parte del string desde comienzo hasta (pero sin incluir) final.
console.log(str.slice(0, 4));
console.log(str.slice(4, 0));
console.log(str.slice(-5));

// => División de cadenas
// split(separador, limite) Devuelve un array con las partes de la cadena que se separan por el separador especificado.
console.log(str.split(" ", 2));

const cadena = "entrevista-a-los-influencer-mas/famosos";
const filter = cadena.split("-");
console.log(filter.at(-1).split("/"));
console.log(cadena.split("-"));

// => Recorte de espacios en blanco
// trim() Devuelve una cadena con los espacios en blanco eliminados de la izquierda y derecha.
const cadenaConEspacios = "    hola soy una palabra    ";

console.log("/*", cadenaConEspacios, "*/");
console.log("/*", cadenaConEspacios.trim(), "*/");

// => Búsqueda y sustitución de valores de cadenas

// replace(valor, nuevoValor) Devuelve una nueva cadena con una o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por el nuevo valor.

console.log(str.replace("o", "X"));

// g - Reemplaza todas las apariciones del valor especificado.
// i - Ignora mayúsculas y minúsculas.
// m - Multi-linea.

console.log(str.replace(/Hola/gi, "X"));

// => Repetición
// repeat(n) Devuelve una cadena repetida n veces.
console.log(str.repeat(1));

// => Rellenar
// padStart(longitud, cadena) Rellena un string con otra string hasta que alcanza la longitud dada. El relleno se aplica desde el extremo izquierdo de la string.
const h = "5";
const m = "3";
// 00:00
console.log(`${h}:${m.padStart(2, "0")}`);

// padEnd(longitud, cadena) Rellena un string con otra string hasta que alcanza la longitud dada. El relleno se aplica desde el extremo derecho de la string.
const password = "123456";

console.log(password.padEnd(6, "*"));

// => El método toString() devuelve una cadena (Todos los objetos tienen un método toString).
const type = true;
console.log(typeof type.toString());
