class Coche():
  def __init__(self) -> None:
    self.__ruedas = 4
    self.chasis = 212
    self.enMarcha = False
  def arrancar(self, arrancamiento):
    self.enMarcha = arrancamiento

    if self.enMarcha:
      return 'Esta en marcha'
    else:
      return 'Esta parado'
  
  def estado(self):
    return f'Mi coche tiene {self.__ruedas} ruedas'
  
  



mi_coche = Coche()

mi_coche.__ruedas = 3
print(mi_coche.estado())

print(mi_coche.arrancar(True))