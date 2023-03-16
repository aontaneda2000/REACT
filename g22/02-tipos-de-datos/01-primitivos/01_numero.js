/************/
/* Números */
/***********/
// => El tipo number representa tanto números enteros como de punto flotante.

// Enteros
1
5
10

// Punto Flotante
10.5
5.1

// También podemos usar guion bajo _ (“azúcar sintáctica”) como separador:
console.log(1_000_000_000)

// En JavaScript, acortamos un número agregando la letra "e" y especificando la cantidad de ceros:
console.log(1e9)

// Negativos
console.log(-5)
console.log(-1e9)

// => Valores Numéricos Especiales:
console.log(1e309) // Infinity: Número infinito
console.log(1 / 0)
console.log(Infinity)

console.log(-1e309) // -Infinity: Número negativo infinito
console.log(-1 / 0)
console.log(-Infinity)

console.log(NaN) // => Not a Number: El resultado de una operación matemática incorrecta o no definida.
console.log('a' * 5)

// => Operador typeof: Para saber el tipo de dato.
var num = 1
console.log(typeof Infinity)