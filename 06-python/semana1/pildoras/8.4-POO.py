
# 1. Definir objeto coche
class Coche():

# 2 Definir estado inicial o constructor
  def __init__(self):
    # 3 Encapsulamiento de propiedades. "__"
    self.__largaChasis=250
    self.__anchoChasis=120
    self.ruedas=4
    self.__enmarcha=False 

# 4. Metodo: Recibe por parametro un valor -> True o False
  def arrancar(self, arrancamos):
    # 5 Modifica la propiedad enmarcha
    self.enmarcha = arrancamos
    # 6 Condiciona a evaluar -> Si tiende a True o False
    if(self.enmarcha):
      return 'El coche esta en marcha'
    else:
      return 'El coche esta parado'
  
  # 7 Definir el estado de mi coche
  def estado(self):
    return f'El largo del coche es: {self.__largaChasis} y tiene : {self.ruedas} ruedas'

# ===================== 1 ======================
# 1 Genero mi 1 instancia
miCoche = Coche()
# 2  Accede a mi metodo o ejecuto
print(miCoche.arrancar(True))

# 3. Preguntar estado del primer coche
print(miCoche.estado())

# ===================== 2 ======================

# 1 Genero 2 instancia
micoche2 = Coche()

# 4. Intentar modificar propiedad protediga o encapsulada
micoche2.ruedas = 3

# 2 Accedo a metodo a arrancar para ejecutarlo
print(micoche2.arrancar(False))

# 3. Preguntar estado del 2 coche
print(micoche2.estado())



# ===================== # Nota: ======================
# Estado inicial o constructor, para que sirve?+
# Encapsulamiento de propiedades o atributos, variables -> No permite modificar una propiedad fuera de la clase o objeto.