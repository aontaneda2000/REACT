const { describe, it } = require("mocha");
const { assert } = require("chai");

const { getAllUsers } = require("../src/users/users.controllers");

const sumar = (a, b) => a - b;

//describe recibe:
//title: todos los test que engloben la funcion sumar los boy a poner dentro del describe
//funcion:
describe("Teste de la f sumar", () => {
  //recibe un strin y f
  // string: titulo de cual es el resultado que esperamos
  //f: done se va a ejecutar una vez terminen los tests
  it("Deberia retornar 12 cuando le pasamos 8 y 4 ", (done) => {
    //response: contiene la respuesta que seva a testeat
    const response = sumar(8, 4);
    //Comparativa de igualdad que esta respuesta sea igual a 12
    assert.equal(response, 12);
    //termina flujo de los tests
    done();
  });

  it("Deberia retorna 5 cuando le pasamos 2 y 3", (done) => {
    const response = sumar(2, 3);
    assert.equal(response, 5);
    done();
  });
});

describe("Test de controladores de usuario", () => {
  it("Deberia retornar todos los usuarios", (done) => {
    getAllUsers().then((data) => {
      assert.typeOf(data, "array");
      done();
    });
  });
});
