/* Que es la poo? 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

https://www.w3schools.com/js/js_classes.asp
*/

/* 
Es un paradigma que podemos resolver problemas de otra manera 

Typescript: Permite listar caracteristicas

Cuando yo este trabajando que un edad como texto esto cuando vaya a produccion va a tronar.

La POO tiene caracteristicas que son los atributos y acciones son los metodos y ademas puedes crear copias o tambien llamados "moldes"
*/

/* Ejemplo1: Un Coche tiene caracteristicas. */

/*  */
class Car {
  /* Constructor: En js Se puede omitir ya que esta de forma implicita
  
  Un constructor es un metodo que se va a llamar cuando se cree una instancia de una clase y se va a ejecutar lo que tiene dentro.

  La caractesticas del constr se va a ejecutaar el codigo que esta dentro y sirve normalmente para asignarle valores.
  */

  constructor(color) {
    /* Atributos */
    console.log(color);
    /* Este color va a ser la caracteristica que estoy agregando y el otro color va a ser lo que estoy recibiendo */
    this.color = color;
  }

  /* Accion o Metodo: Es una funcion que esta dentro de una clase y tambien se puede acceder a sus caracteristicas de un metodo*/

  /* Los metodos tambien se pueden encapsular para que no sean accedidos fuera de la clase */
  openDoor() {
    console.log("Abre la puerta del coche " + this.color);
  }
}

/* 
Instancia de la clase 

Es crear un nuevo coche que va a tener todas las caracteristicas que tiene esa clase

Palabra reservada new y el nombre de la clase
*/
const car = new Car("Rojo");
/* Atraves del constructor yo puedo acceder a esas caracteristicas */
console.log(car.color);
const car2 = new Car("Verde");
console.log(car.color);

/* Acceder a sus metodos o acciones de mi clase */
car.openDoor();

/* Ejercicio 1 en clase:  crear una clase de un objeto, asignarle al menos 2 valores y 2 métodos */

class Calculadora {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  suma() {
    console.log(`La suma es: ${this.num1 + this.num2}`);
  }

  resta() {}
  multiplicacion() {}
  division() {}
}

const suma = new Calculadora(2, 2);
suma.suma();

/* =========== Ejercicio 2: Notar que repiten ciertas caracteristicas  ===========*/

class Coche {
  constructor(color) {
    this.color = color;
  }
  openDoor() {
    console.log("Se abre la puerta del coche color " + this.color);
  }

  startEngine() {
    console.log("Arrancamos el motor");
  }
}

class Moto {
  constructor(color) {
    this.color = color;
  }

  startEngine() {
    console.log("Arrancamos el motor");
  }
}

/* ===========Ejercicio 3 Evitar redundancia =========== */

/* 1 Super clase o clase abstracta
Esta clase no se puede crear instancias de la misma

*/
class Vehicle {
  constructor(color) {
    this.color = color;
  }

  startEngine() {
    console.log(`arrancamos el motor`);
  }
}

/* 2 Estas clases va a extender o heredar las caracteristicas de Vehicle y va a tener sus propias caracteristicas */
class Car2 extends Vehicle {
  /* Metodos o acciones que pertenecen solo a las coches */
  openDoor() {
    console.log("Abriendo la puerta");
  }
}

class Moto2 extends Vehicle {
  /* Caracteristicas o atributos que pertenecen solo a las motos */
  constructor(color, manubrioBrand) {
    /* Metodo super que se le asigna a la clase padre */
    super(color);
    this.manubrioBrand = manubrioBrand;
  }
}

/* Instancia de clase Carro*/
const car3 = new Car2("Rojo");
car3.openDoor();

/* Instancia de clase Moto */
const moto1 = new Moto2("Rojo", "XXX");
moto1.startEngine();
console.log(moto1.manubrioBrand);

/* PRUEBA TECNICA

// crear clase que encuentre el enésimo número de la sucesión fibonacci y el enésimo número primo

// y después retorne fibonacci(n) - 2primo(n)
*/
