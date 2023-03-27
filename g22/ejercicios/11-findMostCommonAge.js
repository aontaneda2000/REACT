/* Encuentra la edad que más se repite

La función findMostCommonAge() recibe como parámetro un arreglo de estudiantes

El arreglo es una lista de estudiantes con una estructura como la siguiente


[
  { name: 'Daniela', age: 25 },
  { name: 'Andrea', age: 23 },
  { name: 'José', age: 27 },
  { name: 'Georg', age: 23 },
];
Tu labor es encontrar y retornar la edad que se repite más veces.

En el ejemplo anterior retornaríamos 23, ya que 23 es la edad que se repite más veces.

*Recuerda utilizar return para devolver tu solución.
*El arreglo que recibe la función puede tener n cantidad de estudiantes. */

const students = [
  { name: "Daniela", age: 25 },
  { name: "Andrea", age: 23 },
  { name: "José", age: 27 },
  { name: "Georg", age: 23 },
];

function findMostCommonAge(students) {
  console.log(students);

  let contador = {};
  // console.log(students[0].age);

  // counterObj['21'] = 1;
  /* 
  counterObj = students[0].age; */

  for (let i = 0; i < students.length; i++) {
    // console.log(counterObj[students[i].age]);
    if (contador[students[i].age]) {
      contador[students[i].age]++;
    } else {
      contador[students[i].age] = 1;
    }
  }

  let max = 0;
  let age = null;

  for (const counter in contador) {
    console.log(contador[counter]);
    console.log(counter);
    if (contador[counter] > max) {
      max = contador[counter];
      age = counter;
    }
  }
  console.log(contador);
  console.log(max);
  console.log(age);
}

console.log(findMostCommonAge(students));
