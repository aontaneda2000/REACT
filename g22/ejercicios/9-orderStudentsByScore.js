/* Ordenando estudiantes por calificación

La función orderStudentsByScore() recibe como parámetro un arreglo de estudiantes con la siguiente estructura:


[
  { name: 'Georg', email: 'georg@academlo.com', score: 100 },
  { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
  { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
]
Tu labor es hacer ordenar todos los elementos de menor a mayor utilizando como referencia la propiedad 'score'.

Ejemplo:
Si tu función recibe el arreglo mencionado anteriormente deberías retornar el siguiente arreglo, ya que el score más pequeño es 34, le sigue el 70 y el mayor es 100:

  

[
    { name: 'Andrés', email: 'andres@gmail.com', score: 34 },
    { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
    { name: 'Georg', email: 'georg@academlo.com', score: 100 }
]

*Puedes utilizar el método sort de Javascript.
*Recuerda utilizar return para devolver tu solución.
*El primer arreglo que recibe la función puede tener n cantidad de estudiantes. */
function orderStudentsByScore(students) {
  // escribe tu solución aquí
  // Recuerda que en esta prueba debes "retornar" el resultado
  // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable orderedData
  // return orderedData;

  return students.sort(function (a, b) {
    return a.score - b.score;
  });
}
