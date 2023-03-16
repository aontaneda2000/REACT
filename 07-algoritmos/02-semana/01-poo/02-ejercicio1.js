// Crear una clase que tengo 2 metodos y  2 atributos

class Calculadora {
  // atributos
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  /* Metodos o acciones */
  suma() {
    console.log(this.num1 + this.num2);
  }
  resta() {
    console.log(this.num1 - this.num2);
  }
}

/* Instancia de la clase Calculadora */
const calculadora2 = new Calculadora(10, 5);

/* Acceder a sus metodos o acciones para ejecutarlos */
calculadora2.suma();
calculadora2.resta();
