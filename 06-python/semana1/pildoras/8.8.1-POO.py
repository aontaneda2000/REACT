# Herencia metodo super

# 1 clase persona
class Persona():

  # 2 Constructor o estado inicial
  def __init__(self, nombre, edad, lugar_residencia):
    # 3 Es igual al parametro del constructor
    self.nombre=nombre
    self.edad=edad
    self.lugar_residencia=lugar_residencia
  
  # Metodo descripcion de la persona para imprimir en consola las propiedades de mi obj
  def description(self):
    print(f'Nombre: {self.nombre}, Edad: {self.edad} , Residencia {self.lugar_residencia}')
  

# 5 Quinta clase  
class Empleado():

# 6
  def __init__(self, salario, antiguedad) -> None:
    # 7 Es igual al parametro del constructor
    self.salario=salario
    self.antiguedad=antiguedad


# 8 Instancia de persona
Antonio= Persona('Antonio', 55, 'España')
#9  Acceder a metodos de persona
Antonio.description()





# La clase empleado puede heredar de persona ya que un empleado tiene un nombre, edad..