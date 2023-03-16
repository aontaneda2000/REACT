/* Hacer algoritmo que tenga como complejidad O(n^3)
 */

function arrbigO(arr) {
  let counterFor1 = 0;
  let counterFor2 = 0;
  let counterFor3 = 0;

  for (let i = 0; i < arr.length; i++) {
    counterFor1++;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      counterFor2++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      counterFor3++;
    }
  }
  console.log(counterFor1, "=========");
  console.log(counterFor2, "=========");
  console.log(counterFor3, "=========");
}

arrbigO([1, 2, 3]);
/* O(n'2) */

/* 




*/
