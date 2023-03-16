# 3.5 import math
import math

# 3.1 Llamadas de funciones
# Una funcion recibe un argumento y devuelve un valor tambien conocido como "valor de retorno" 
# Se puede almacenar una funcion en una variable, 
# Cada valor tiene un identificador unico 



# 3.2 Conversion de tipos
# Existen funciones para transforman valores por ejemplo:

# 1 int(): Transforma valores de cadena a integer si es posible o si no da error, siempre redondea hacia el numero mas bajo, tambien transforma valores de tipo float a integer.

print(int('54'))
# print(int('Hola mundo')) #error 

# 2 float()
print(float(12))
print(float('12'))

# 3 str()
print(type(str(12)))
print(str(12.2))


# 3.3 Coercion de tipos
# Cuando se realiza una operacion por ejemplo: una division de enteros con valores flotantes python transforma el resultado a valores flotantes.

minuto = 59.0
print(minuto//60)

# 3.4 Funciones matematicas
# Para realizar calculos matematicos como geometria hay que hacer uso de la biblioteca "math"
print(int(math.sqrt(9)))



# 3.5 Composicion 
# Se puede realizar operaciones en la zona de argumentos para luego el resultado ser asignado a una variable.

angulo = 30
pi = 3.14
x = math.cos(angulo + pi/2) 

# Puede pasar el resultado de una funcion y pasarlo como argumento a otra
x = math.exp(math.log(10.0))


# 3.6 Añadir funciones nuevas
# 1 Una funcion son instrucciones que es esperan una operacion de salida.
# 2 Ilegal utilizar palabras reservadas para nombrar funciones 
# 3 sintaxis
def nombre_funcion(zona_argumentos):
  # codigo de la funcion
  return 'valor de retorno'

#Invocacion o lllamada de la funcion
nombre_funcion('zona de parametros')

# 4 Nueva funcion
def nueva_linea():
  # devuleve un caracter vacio y salto de linea con esta sentencia 
  print()


print('Primera linea')
nueva_linea()
print('Segunda linea')

def tres_lineas():
  nueva_linea()
  nueva_linea()
  nueva_linea()

print('Primera linea')
tres_lineas()
print('Segunda linea')

# Notas_:
# 5 Se puede llamar una funcion dentro de otra funcion
# 6 Es habitual realizar este procedimiento

# Actividad =================
def nueve_lineas():
  pass

# 3.7 las definiciones y el uso
# Las sentencias de la funcion no se ejecutan hasta que se llama a la funcion.
# Actividad =================



# 3.8 Flujo de ejecucion
# 1 Las sentencias se ejecutan orden hasta que encuentra el llamado a la funcion.
# 2 Puede definir una funcion dentro de otra pero esta no se ejecutara hasta que se invoque la funcion exterior.
# Las funciones son como un desvio en el flujo de ejecucion ya que cuando se llama a una salta y lee todas las sentencias y retoma en el lugar donde lo dejo

# Nota: No leer un programa de la parte superior a la inferior si no el flujo de ejecucion.

 


# 3.9 Parametros y argumentos
# 1 Dentro de la funcion los valores o argumentos que se la han pasado a la funcion se le asignan a variables llamados parametros.
# Se evalua la expresion antes de ejecutar la funcion

def imprimeDoble(paso):
  print( paso, paso)

# 2 Pueden recibir cualquier tipo de dato como argumentos:
imprimeDoble()

# 3 Se puede pasar variables y expresiones como argumentos.
imprimeDoble('Jamon'*3) #expresiones
imprimeDoble(math.sqrt(2)) #expresiones

latoya = 'Hola soy latoya'
imprimeDoble(latoya) #variables

# 3.10 Las variables y los parametros son locales
# Cuando se crea una variable dentro de una funcion solo va existir en ese bloque y no podra ser accesible fuera de ella.
# Los parametros solo son accesibles dentro de la funcion.
def catDoble(string):
  cat = string + string 
  imprimeDoble(cat)

cantus1 = 'Die jesu'
cantus2 = 'Die eus requiem'

catDoble(cantus1, cantus2)



# 3.11 Diagramas de pila.
# Sirve para mantener el rastro de que variables pueden usarse y donde.
# __main es la funcion mas alta. Cuando crea una variable fuera de cualquier funcion pertenece a __main__
# traceback Señala en que archivo del programa sucedio el error


# 3.14 Funciones con resultado
# Actividad ====================

# Las funciones pueden devolver un resultado 









