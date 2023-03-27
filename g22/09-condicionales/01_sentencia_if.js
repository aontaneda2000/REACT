/*****************/
/* SENTENCIA IF */
/****************/
// => 1) Condición simple con la sentencia if
// => Evalúa la condición en los paréntesis, y si el resultado es true ejecuta un bloque de código.
if (true) {
  console.log("Este mensaje se va a mostrar");
}

if (false) {
  console.log("Este mensaje no se va a mostrar");
}

if (35 > 20) {
  console.log("si es mayor");
}

const a = 10;
const b = 5;

{
  if (a < b) {
    console.log(`${a} es menor que ${b}`);
  }

  if (a > b) {
    console.log(`${a} es mayor que ${b}`);
  }

  // Templete literals
  if (a == b) {
    console.log(`${a} es igual que ${b}`);
  }
}

// => 2) Condición compuesta con la cláusula else
// => Es un bloque opcional y este se ejecutará cuando la condición sea falsa.

{
  const edad = 25;
  let permiso = "";

  if (edad >= 18) {
    permiso = "Si tiene permiso para conducir";
  } else {
    permiso = "No tiene permiso para conducir";
  }

  console.log(permiso);
}

// => 3) Condición múltiple con la cláusula else if
// => Nos proporciona bloques opcionales para probar todas nuestras variantes.
if (a < b) {
  console.log(`${a} es menor que ${b}`);
} else if (a > b) {
  console.log(`${a} es mayor que ${b}`);
} else {
  console.log(`${a} es igual que ${b}`);
}

// Condiciones anidadas
const nombres = [
  "Juan",
  "Pedro",
  "María",
  "Jose",
  "Jesús",
  "Luis",
  "Julian",
  "Julio",
];
// J
// 5

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i].startsWith("J")) {
    if (nombres[i].length <= 5) {
      console.log(nombres[i]);
    } else {
      console.log(nombres[i]);
    }
  } else {
    console.log(nombres[i]);
  }
}

const users = [
  {
    nombre: "Aaron",
    active: true,
    tasks: 5,
  },
  {
    nombre: "Lulu",
    active: false,
    tasks: null,
  },
];

if (users[0].active) {
  if (users[0].tasks >= 5) {
    console.log("Usuario admitido");
  }
} else {
  console.log("Usuario no admitido");
}
