/********/
/* FOR */
/*******/
// => El bucle for es más complejo, pero también el más usado.

/*
Vamos a examinar la declaración for parte por parte:
1. (inicialización) se ejecuta una vez al principio del bucle.
2. (condición) se comprueba antes de cada iteración. Si es falsa, el bucle finaliza.
3. (Instrucción) se ejecuta una y otra vez mientras la condición sea verdadera.
4. (operación) se ejecuta después del cuerpo al final de cada iteración del bucle.
*/

for (let n = 1; n <= 20; n++) {
  console.log(n);
}

/* El algoritmo general del bucle funciona de esta forma:
  inicialización
    --> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
    --> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
    --> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
    --> si condición ya no se cumple --> termina el bucle */

const usuarios = [
  {
    nombre: "Juan",
    edad: 20,
  }, // 0
  {
    nombre: "Pedro",
    edad: 25,
  }, // 1
  {
    nombre: "María",
    edad: 26,
  }, // 2
];

let nombres = [];

for (let i = 0; i < usuarios.length; i++) {
  nombres[i] = usuarios[i].nombre;
}

console.log(nombres);

// => La directiva especial break.
let max = 50;
for (let n = 1; n <= max; n++) {
  // if (n == 15) {
  //   break
  // }

  if (n == 15) break;
  console.log(n);
}

// La directiva continue no detiene el bucle completo. En su lugar, detiene la iteración actual.
for (let n = 1; n <= 20; n++) {
  if (n % 2) continue;
  console.log(n);
}

// => For anidados (un for dentro de otro for).
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i: ${i} j: ${j}`);
  }
}

const arr1 = [{ id: 1 }, { id: 2 }, { id: 3 }];

const arr2 = [{ user_id: 2 }, { user_id: 1 }, { user_id: 3 }];

/*
comenzar
i: 1 --> primera iteracion de i
  j: 1 --> primera iteracion de j
  j: 2 --> segunda iteracion de j
  j: 3 --> tercera iteracion de j

i: 2 --> segunda iteracion de i
  j: 1 --> primera iteracion de j
  j: 2 --> segunda iteracion de j
  j: 3 --> tercera iteracion de j

i: 3 --> tercera iteracion de i
  j: 1 --> primera iteracion de j
  j: 2 --> segunda iteracion de j
  j: 3 --> tercera iteracion de j
fin
*/

// => Etiqueta, Es un identificador con un signo de dos puntos:
let nums = [];
exit: for (let i = 0; i <= 500; i++) {
  console.log(i);

  for (let j = 5; j <= 10; j++) {
    nums.push(j);

    if (j == 10) {
      break exit;
    }
  }
}

console.log(nums);

let nums2 = [];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 3; j++) {
    nums2[j] = j;
    console.log(j);
  }
}
console.log(nums2);
