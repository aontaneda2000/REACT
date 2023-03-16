# 12 Clases y objetos
# Definir clase:
# pass: Esta sentencia no significa nada solo se define ya que las clases son sentencias compuestas y necesitan tener algo en su cuerpo
class Punto:
  pass
# Instancia: Instanciacion de una clase 
blanco = Punto()


# 12.2 Atributos
# Para añadir nuevos dato se utiliza la notacion de punto.
blanco.x = 12
blanco.y = 21

print(blanco.x) # Valor de atributo
print(blanco) # Instancia de punto
print(id(blanco)) # identificador unico
print(type(blanco)) # Tipo de dato

# 12.1 Instancias como parametro

def imprimeInstancia(p):
  print({p.y}) 

print(imprimeInstancia(blanco))



