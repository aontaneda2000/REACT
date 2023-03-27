// 1. ¿Cual es el resultado de la siguiente expresion?
console.log(null || 2 || undefined); // null
console.log(1 || 2 || 3); //1
console.log(1 && null && 2); //null
console.log(1 && 2); //2
console.log(null || (2 && 3) || 4); //3

const count = 0;

console.log(null || count || 35); //35
console.log(null && count && 35); //null
console.log(null ?? count ?? 35); //0

// 2. Usando los operadores logicos, escriba una expresion que devuelva true si el usuario esta autenticado y si tiene acceso a la pagina
const user = { authenticated: true, access: true };
const user2 = { authenticated: true, access: false };
const user3 = { authenticated: false, access: true };
const use4 = { authenticated: false, access: false };

console.log(user.authenticated && user.access); //true
console.log(user2.authenticated && user2.access); //false
console.log(user3.authenticated && user3.access); //false
console.log(use4.authenticated && use4.access); //false

console.log(user.authenticated || user.access); //true
console.log(user2.authenticated || user2.access); //true
console.log(user3.authenticated || user3.access); //true
console.log(use4.authenticated || use4.access); // false

// 3. Resuelva el siguiente problema: Tenemos un arreglo de furtas, y queremos todas las frutas que empiecen con la letra "P" y que aparte sean de la tienda "La frutera".
const fruits = [
  { nombre: "Uva", tienda: "El mercado" },
  { nombre: "Pera", tienda: "La frutera" },
  { nombre: "Manzana", tienda: "La frutera" },
  { nombre: "Papaya", tienda: "El mercado" },
  { nombre: "Platano", tienda: "La frutera" },
  { nombre: "Piña", tienda: "La frutera" },
];
const tienda = "La frutera";

console.log(fruits[1].nombre.startsWith("P") && fruits[1].tienda === tienda);

function arrFruits(fruits) {
  let fruitsP = [];

  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].nombre.startsWith("P") && fruits[i].tienda === tienda) {
      fruitsP.push(fruits[i]);
    }
  }
  return fruitsP;
}

console.log(arrFruits(fruits));
