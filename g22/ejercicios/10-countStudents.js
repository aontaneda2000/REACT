/* Cuenta los estudiantes de un país

La función countStudents() recibe 3 parámetros, los 2 primeros son arreglos y el tercero es un string

El primer arreglo es una lista de estudiantes con una estructura como la siguiente


[
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]
El segundo arreglo es una lista de países con una estructura como la siguiente


[
  { id: 1, name: 'Mexico', },
  { id: 2, name: 'Colombia' }
]
El tercer parámetro es el nombre de un país, por ejemplo: 'Colombia'

Tu labor es contar y retornar el número total de estudiantes que pertenezcan al país que reciba la función.

En el ejemplo anterior retornaríamos 3, ya que 3 estudiantes pertenecen al país con el id 2.

*Recuerda utilizar return para devolver tu solución.
*El primer arreglo que recibe la función puede tener n cantidad de estudiantes.
*El segundo arreglo que recibe la función puede tener n cantidad de países. *El tercer parámetro que recibe la función puede ser el nombre de cualquier país. */

const students = [
  { name: "Georg", email: "georg@academlo.com", country_id: 1 },
  { name: "Andrea", email: "andrea@gmail.com", country_id: 2 },
  { name: "Daniela", email: "daniela@gmail.com", country_id: 2 },
  { name: "Mónica", email: "monica@gmail.com", country_id: 2 },
];

const countries = [
  { id: 1, name: "Mexico" },
  { id: 2, name: "Colombia" },
];

function countStudents(students, countries, countryName) {
  // escribe tu solución aquí
  // Recuerda que en esta prueba debes "retornar" el resultado
  // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable totalStudents
  // return totalStudents;

  console.log(students);

  let counter = 0;

  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < countries.length; j++) {
      if (
        students[i].country_id === countries[j].id &&
        countries[j].name === countryName
      ) {
        counter++;
      }
    }
  }
  console.log(counter);
  return counter;
}

countStudents(students, countries, "Colombia");

/* algoritmos de ordenamiento y de busqueda  */
