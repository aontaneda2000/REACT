// Crear una super clase vehiculo y 1 clase moto 1 clase carro que hereden de vehiculo

/* Super clase */
class Vehicle {
  constructor(color) {
    this.color = color;
  }

  startEngine() {
    console.log("Encendiendo el motor");
  }
}

/* Clases que heredan atributos y acciones de la super clase */
class Car extends Vehicle {
  openDoor() {
    console.log("Abrimos la puerta");
  }
}

class Moto extends Vehicle {
  /* Atributos de objeto moto */
  constructor(color, manubrioBrand) {
    super(color);
    this.manubrioBrand = manubrioBrand;
  }
}

/* ====================================== */
/* Instancia de super clase */
const vehicle = new Vehicle("Red");

/* Instancia de clase carro */
const car = new Car();

/* Acceder a sus metodos o acciones para ejecutar */
car.startEngine();

/* Instancia de clase moto */
const moto = new Moto("Red", "XXX");

/* Acceder a atributos o caracteristica del objeto */
console.log(moto.manubrioBrand);
