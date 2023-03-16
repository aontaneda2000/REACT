/**************************************/
/* Estructuras de datos con Arreglos */
/*************************************/
// => Los Arreglos son usados para almacenar colecciones de datos ordenadas, donde cada elemento tiene un índice numérico.

// => Crear un arreglo usando las literales (corchetes).
var array = []

// ['fresa', 'pera']
//     0        1

// => Podemos agregar elementos a un arreglo
array[0] = 'Fresa'
array[1] = 'Pera'
array[array.length] = 'Manzana'
array[array.length] = 'Melon'
array[array.length] = 'Mango'

console.log(array)

console.log(array[0])
console.log(array[1])

console.log(array.length)

// Acceder al último elemento del arreglo
console.log(array[array.length - 1])

// => Truncar el arreglo
array.length = 2
array.length = 0

console.log(array)

array[0] = 'Mora'

console.log(array)


// => Podemos almacenar cualquier tipo de dato en un arreglo:
var vector = [{}, 'abc', true, null, function () { console.log('Hola') }]
//              0     1      2    3                4

console.log(vector[4])

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// N1             0          1           2           
// N2          0  1  2    0  1  2    0  1  2
console.log(matrix[0][0])
console.log(matrix[1][1])
console.log(matrix[2][2])

console.log(typeof matrix)

console.log(Array.isArray(matrix))
