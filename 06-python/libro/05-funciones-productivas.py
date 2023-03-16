# 5 Funciones productivas
# 5.1 Valores de retorno
# Son funciones que devuelven valores 


# 1. es util ´ disponer de varias sentencias de retorno, una en cada rama de una condici´on:
def suma(a,b):

  if a > b:
    return 'a es mayor que b'
  else:
    return 'b es mayor que a'

resultado = suma(2,3)
print(resultado)

def valorAbsoluto(x):
  if x < 0:
    return -x
  elif x > 0:
    return x

print(valorAbsoluto(0))



# 5.4 Funciones booleanas
#  funciones pueden devolver valores booleanos 
# Es habitual dar a las funciones booleanas nombres que suenan como preguntas s´ı/no
def esDivisible(x, y):
  if x % y == 0:
    return 1 # it’s true
  else:
    return 0 

print(esDivisible(2, 2))