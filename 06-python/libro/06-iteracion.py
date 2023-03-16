# 6 Iteracion
# 6.1 Asignacion multiple
# Es importante distinguir entre operador de "=" asignacion y operador "==" de igualdad

a = 5
b = a
a = 4

# 6.2. La sentencia while
# Una de las tareas para las que los computadores se usan con frecuencia es la automatizaci´on de tareas repetitivas

def cuenta_atras(n):
  while n > 0:
    print( n)
    n = n -1
  print('despegando')

cuenta_atras(4)

# Evaluar la condici´on, devolviendo 0 o 1.
# 2. Si la condici´on es falsa (0), salir de la sentencia while y continuar la
# ejecuci´on en la siguiente sentencia.
# 3. Si la condici´on es verdadera (1), ejecutar cada una de las sentencias en el
# cuerpo del bucle while, y luego volver al paso 1.



# 6.7 Variables locales
# Una variable solo puede ser utilizada dentro de una funcion y es inaccesible fuera de la misma.


# 6.9 Funciones
# Al dar un nombre a una secuencia de sentencias, hace que su programa sea m´as f´acil de leer y depurar.Dividir un programa largo en funciones le permite separar partes del programa, depurarlas aisladamente, y luego recomponerlas en un todo. Las funciones facilitan tanto la recursividad como la iteraci´on.Las funciones bien disenadas ˜ son generalmente utiles ´ para m´as de un programa. Una vez escritas y depuradas, puden reutilizarse.
