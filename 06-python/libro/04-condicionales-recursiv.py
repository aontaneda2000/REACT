import math

# 4 Condicionales y recursividad
#  4.1 EL operador modulo
# Funciona con enteros y expresiones entereas y esta operacion devuelve el resto de dividir el primer operando entre el segundo.
# Este operador es util si se quiere comprobar si un numero es divisible entre otro. x % y es cero: check.
# FALTA 1 DE ENTENDER

cociente = 7 % 3 #7 dividido entre 3 da 2 y con 1 de resto.
print(cociente)


# 4.2 Expresiones booleanas
# Es un expresion que es cierta o falsa por lo cual en python una expresion cierta tiene el valor de 1 y una expresion falsa tiene valor 0

# Operador de igualdad devuelve una expresion booleana
print(1==1)

x = 1 
y = 1

# operadores de comparacion
x != y
x < y
x > y
x >= y
x <= y

# Tener en cuenta que los operadores de comparacion no son igual que en matematicas y que un operador "=" es de asignacion no de igualdad "=="


# 4.3 Operadores logicos
# Tres operadores logicos and or y not.

# 1 and
x > y and x < y #Solo es verdadero si se cumplen las dos condiciones

# 2 or
# Se cumple si el numero es divisible para 2 o si es divisible para 3
n = 6
n%2 == 0 or n%3 == 0

# 3 not: Niega una expresion booleana
print(not(1 < 2))

# Nota: Cualquier numero que no sea 0 es interpretado como verdadero

# 4.4 Ejecucio condicional
# Si la expresion boolean es verdadera entonces se ejecuta el interior del if.

# condicion
if x > 0:
  print(f'{x} es positivo')

# 4.5 Ejecucion alternativa "else"
if x > 0:
  print(f'{x} es positivo')
else:
  print('Es negativo')

# 4.6 Condiciones encadenadas "elif"

if x<y:
  print(x, 'es menor que' , y)
elif x > y:
  print(x , 'es mayor que ', y)
else:
  print(x, 'y', y , 'son iguales')

# 4.7 Condiciones anidadas

if x == y:
  print()


# 4.8 La sentencia return
# Permite terminar la ejecucion de una funcion antes de alcanzar su final.
def imprimeLogaritmo(x):
  if x <= 0:
    print('Solo numeros positivos por favor')
    return

  result = math.log(x)


# 4.9 Recursividad
# 1 Son Funciones recursivas que se llaman a si mismas en el proceso de ejecucion  .

def cuenta_atras(n):
  print(n)
  
  if n == 0:
    print('Despegando')
  else:
    print(n)
    cuenta_atras(n-1)

cuenta_atras(1)


# 4.10 Diagramas de pila

# 4.11 Recursividad infinita
# Si una recursion no alcanza nunca el aso base, seguira haciendo llamadas recursivas para siempre y nunca terminara.
# Python informa a traves del traceback sobre este error.

def recurInfinit():
  pass
  # Recursividad infinita
  # recurInfinit()


recurInfinit()


# 4.12 Entradas por teclado
# Con esta funcion input se obtiene una cadena y se guarda en la variable para luego ser convertida a otro tipo de valor si es necesario.

mensaje = input('Hola');
