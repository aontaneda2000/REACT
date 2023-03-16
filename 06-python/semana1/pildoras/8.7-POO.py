
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

# 9 Nueva clase que hereda de vehiculos ya que una furgoneta pueda frenar..
# 10 Pregunta: Que comportamientos tiene solo este objeto?
class Furgoneta(Vehiculos):
  # 11 Metodo Cargar cosas
  def carga(self, cargar):
    self.cargado=cargar
    if self.cargado:
      return 'La Furgoneta esta cargada'
    else:
      return 'La Furgoneta no esta cargada'

    

# 2 Hereda 6 metodos:
#  2.1 El comportamiento inicial y los metodos de vehiculo
#  2.2 El suyo propio
class Moto(Vehiculos):
  # 1. Nuevo metodo que no tenga el objeto vehiculo
  hcaballito="" 
  def caballito(self):
    self.hcaballito='voy haciendo el cabaillito'

# 7. Definir estado y propiedad caballiito para saber el estado de la moto
  def estado(self):
    print(f'La marca de mi coche {self.marca} y el modelo es: {self.modelo} {self.hcaballito}')

miMoto=Moto('Honda', 'cbr')

# 15 Nueva clase vehiculos electricos
class VElectricos():
  # 16 Constructor
  def __init__(self):
    # 16.1 Determina cuanto dura cargado un vehiculo electrico
    self.autonomia=100
  
  # 17 Metodo si el vehiculoe sta cargando o no
  def cargarEnergia(self):
    self.cargarndo=True

      


# 3 Acceder a Nuevo comportamiento del objeto o clase moto
# 8 Si se ejecuta este metodo la moto estara en caballito si no mostrara una cadena vacia
miMoto.caballito()


# 4 Este metodo 'estado' hereda de la clase vehiculo 
# 5 No podemos imprimir el estado de caballito porque un bus no puede hacer el caballito
#  6 Por lo cual se crea un nuevo estado en la clase moto y por lo tanto se sobrescribira el metodo que hereda de la clase padre.
miMoto.estado()


# 12 instancia que hereda de vehiculos
miFurgoneta = Furgoneta('Renault', 'Kango')

# 13 acceso a sus metodos de vehiculo y metodos unicos de furgoneta
miFurgoneta.arrancar()
miFurgoneta.estado()
miFurgoneta.carga(True)

# 14 error al acceder a metodos de otro objeto


# 18 Nueva clase que construe vehiculos de tipo electrico
# 18.1 Heredar propiedades y metodos de dos clases o mas 
class BicletaElectrica(VElectricos, Vehiculos):
  pass

# 19 La herencia multiple se da preferecia a la que esta a la izquierda para pasarle los parametros que se definen en la funcion constructora.
miBici=BicletaElectrica()










# Nota:==========
# herencia multiple
