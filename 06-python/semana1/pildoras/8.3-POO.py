# 1. Crear mi objeto Coche
class Coche():
  # 2. Definir 4 propiedades de mi coche
  largaChasis=250
  anchoChasis=120
  ruedas=4
  enmarcha=False 

# 3. Definir 2 comportamientos o metodos de mi coche
  def arrancar(self):
    self.enmarcha=True; 

# 4 Defino en que estado esta mi coche -> Cambiara segun si el metodo arrancar se ejecuta.
  def estado(self):
    # 4.1 Condiciona a evaluar si el coche es True o False
    if(self.enmarcha):
      return 'El coche esta en marcha'
    else:
      return 'El coche esta parado'

# 4.2 Crear una instancia de mi objeto
miCoche = Coche()

# 5. Accediendo a las propiedades de mi objeto
print('El largo del coche es: ', miCoche.largaChasis)

# 6. Accediendo a las comportamientos de mi objeto; viaja al metodo self -> miCoche.enmarcha = True
miCoche.arrancar()

# 7. Accediendo al comportamiento de mi objeto una vez ejecutado
print(miCoche.estado())

# ================ Nota ===============
# Propiedades y metodos:
# Instancia de una clase y aceso a sus metodos.
# Palabra reservada "self" hace referencia al objeto donde se encuentra
