/*********************/
/* SENTENCIA SWITCH */
/********************/
// => La sentencia switch es una forma de evaluar una condición y ejecutar una secuencia de instrucciones dependiendo de la condición.
const diaDeLaSemana = 'Jueves'
let mostrarDia

switch (diaDeLaSemana) {
  case 'Lunes':
    mostrarDia = 'Hoy es Lunes'
    break;
  case 'Martes':
    mostrarDia = 'Hoy es Martes'
    break;
  case 'Miercoles':
    mostrarDia = 'Hoy es Miercoles'
    break;
  case 'Jueves':
    mostrarDia = 'Hoy es Jueves'
    break;
  case 'Viernes':
    mostrarDia = 'Hoy es Viernes'
    break;

  default:
    mostrarDia = 'Ese no es un dia valido'
}

console.log(mostrarDia)

// const dias = {
//   Lunes: 'Hoy es lunes',
//   Martes: 'Hoy es martes',
//   Miercoles: 'Hoy es miercoles',
//   Jueves: 'Hoy es jueves',
//   Viernes: 'Hoy es viernes',
// }

// console.log(dias[diaDeLaSemana] ? dias[diaDeLaSemana] : 'Ese no es un dia valido')

// => Agrupamiento de case
let mes = 'enero'

switch (mes) {
  case 'enero':
  case 'febrero':
  case 'marzo':
    console.log('Invierno')
    break

  case 'abril':
  case 'mayo':
  case 'junio':
    console.log('Primavera')
    break

  case 'julio':
  case 'agosto':
  case 'septiembre':
    console.log('Verano')
    break

  case 'octubre':
  case 'noviembre':
  case 'diciembre':
    console.log('Otoño')
    break

  default:
    console.log('No es un mes valido')
}

// => Comparación de valores con igualdad estricta
console.log('0' === 0)

switch (10 < 1) {
  case 0:
    console.log('Se ejecuta')
    break
  case '0':
    console.log('Se ejecuta')
    break
  case false:
    console.log('Se ejecuta')
}
