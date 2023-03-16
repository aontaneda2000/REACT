# Funcion suma dos numeros
def suma(num1, num2):
  print(num1 + num2)

# Llamada a la funcion
suma(5,5)
suma(5,5)

# Funcion resta dos numeros
def resta(num1, num2):
  resultado = num1 + num2 
  return resultado

# Llamada a la funcion
print(resta(1,22))

# Funcion mutltiplica dos numeros
def multiplicacion(num1, num2):
  resultado = num1 * num2;
  return resultado

# Llamada a la funcion
print(multiplicacion(1, 2))

# Funcion valores por defecto
def valoresDefecto(name, lname=''):
  return 'Hola soy ' + name + ' y mi apellido es' + lname

# Llamada a la funcion
print(valoresDefecto('Aaron'))