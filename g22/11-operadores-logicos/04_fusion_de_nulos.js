/*****************************************/
/* FUSIÓN DE NULOS (NULLISH COALESCING) */
/****************************************/
// => NULLISH COALESCING es representado con dos signos de interrogación ??

// => Como este trata a null y a undefined de forma similar, usaremos un término especial para fines didacticos. Diremos que una expresión es “definida” cuando no es null ni undefined.

const heigth = 0;

console.log(heigth || "Lo que sea");

console.log(heigth ?? "Lo que sea");
console.log(null ?? "Lo que sea"); // lo
console.log(null ?? undefined); //undefined
console.log(undefined ?? 0); //0

// => La precedencia del operador ?? es la misma de ||.

console.log((null || "hola") ?? 123); //hola
// => Por motivos de seguridad, JavaScript prohíbe el uso de ?? junto con los operadores && y ||, salvo que la precedencia sea explícitamente especificada con paréntesis.
