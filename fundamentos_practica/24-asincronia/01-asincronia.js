
/* sync */
/* console.log('Tarea 1')
let tarea2
for (let i = 0; i < 5000000000; i++) {
tarea2 = 'tarea 2'
}

console.log(tarea2);
console.log('tarea3'); */


/* async */

console.log('Tarea 1')
 
/* Parte de las apis del navegador */
/* lo que hace javascript en el navegador lo aparta y luego de ejecutar las otras tareas se ejecuta el mismo. */
setTimeout(() => {
  console.log('tarea2');
  
}, 2000);

console.log('tarea3');