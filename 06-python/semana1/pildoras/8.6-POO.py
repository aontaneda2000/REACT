

# Clase padre o superclase que englobe los objetos

class Vehiculos():
  def __init__(self, marca,modelo ):
    self.marca=marca
    self.modelo=modelo
    self.enmarcha=False
    self.acelera=False
    self.frena=False

  def arrancar(self):
    self.enmarcha =True
  
  def acelerar(self):
    self.acelera =True
  
  def frenar(self):
    self.frena =True
  
  def estado(self):
    print(f'La marca de mi coche {self.marca} y el modelo es: {self.modelo}')

    

# 1 Nombre de la clase y la clase que heredamos de la clase vehiculos
# 2 Esta clase tendra sus propios comportamientos
class Moto(Vehiculos):
  pass 

# 3 Instancia de la clase moto <=> para acceder a los metodos de vehiculos
# 4 Pasar parametros de la funcion constructora 
miMoto=Moto('Honda', 'cbr')

#  5 Acceder
miMoto.estado()






# nota: O===================
# # Herencia
# Sirve para reutilizar codigo en caso de crear objetos similares
# Herencia multiple: Clase que hereda de varias clases