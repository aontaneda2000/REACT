

# 1. Definir objeto coche
class Coche:

  def __init__(self):
    self.__largaChasis=250
    self.__anchoChasis=120
    self.ruedas=4
    self.__enmarcha=False 

  def arrancar(self, arrancamos):
    # 3. Sobreescribe propiedad  en marcha que recibe por parametro
    self.enmarcha = arrancamos # True o False
    
    # 3.1 evalua si es verdad que el carro esta en marcha
    if(self.enmarcha):
      # 3.2 Ejecuta metodo
      chequeo = self.__chequeo_interno()
    
    # 3.3 Solo ejecutara una de estas condiciones
    # 3.3 Evalua si el coche esta en marcha y si esta listo para el chequeo
    if(self.enmarcha and chequeo ):
      return 'El coche esta en marcha'
      # 3.4 Evalua si es verdad que el coche esta en marcha y si el chequeo ha fallado 
    elif(self.enmarcha and chequeo==False):
      return 'Algo ha ido mal en el chequeo, no podemos arrancar'
    else:
      return 'El coche esta parado'
  
  def estado(self):
    return f'El largo del coche es: {self.__largaChasis} y tiene : {self.ruedas} ruedas'
    
  # 2 Definir metodo encapsulado y ejecutarlo en metodo arrancar
  def __chequeo_interno(self):
    # 2.1 Definir propiedades estaticas
    print('Realizando chequeo interno')
    self.puertas = 'cerradas';
    self.aceite = 'ok'
    self.gasolina = 'ok'
    # 2.2 Evalua si es verdad que el coche esta listo para el chequeo
    if self.puertas == 'cerradas' and self.aceite == 'ok' and self.gasolina == 'ok':
      return True;
    else:
      return False




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

# 4 Error al acceder a metodo encapsulado <=> error el objeto no tiene ese metodo
print(micoche2.__chequeo_interno())



# ================ Nota ===============
# Encapsulamiento de metodos: "__" Los metodos solo podran ser ejecutados dentro de la clase y no fuera de ella.
# No tiene ningun sentido acceder a los metodos fuera de mi objeto para realizar una accion.