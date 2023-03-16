class Car {
  /* Atributos */
  constructor(color) {
    this.color = color;
  }

  /* Metodos */
  openDoor() {
    console.log("Abre la puerta del coche " + this.color);
  }
}

/* Instancia de la clase */
const car = new Car("Rojo");
console.log(car.color);

/* Acceder a sus metodos */
car.openDoor();
