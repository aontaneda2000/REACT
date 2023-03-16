import string

# 7 CADENAS
# 7.2 UN tipo de datos compuesto
# A estos tipos de datos se pueden acceder a sus partes.
# Notacion de corchetes para acceder al indice de una cadena de caracteres
# 
cadena = "banana"
letra = cadena[1]
print(letra)

# 7.2 Longitud
# La funcion len devuelve la longitud de caracteres de una cadena

fruta = "banana"

longitud = len(fruta)
print(longitud)

# Como empezamos a contar por cero, las seis letras est´an numeradasdel 0 al 5. Para obtener el ultimo ´ car´acter tenemos que restar 1 de longitud:
ultimoCaracter = fruta[longitud-1]
print(ultimoCaracter)

# Para obtener el penultimo caracter se le restaria -2


# 7.3 Recorrido y el bucle for

indice = 0

while indice < len(fruta):
  # letra = fruta[longitud]
  letra = fruta[indice]
  print(letra)
  indice = indice + 1


# Sintaxis de bucle for Cada vez que recorremos el bucle, se asigna a la variable car el siguiente car´acter de la cadena. El bucle continua´ hasta que no quedan caractere
for car in fruta:
  print(car)

# Ejercicio con bucle for concatenando cadenas 
prefijos = "JKLMNOPQ"
sufijo = "ack"

for letra in prefijos:
  print (letra + sufijo)

# 7.4 Porciones de cadenas
# a. La selecci´on de una porci´on es similar a la selecci´on de un car´acter:
s = "Pedro, Pablo, y Maria"
print( s[0:5])
print (s[7:12])
print (s[15:20])
# El operador [n:m] devuelve la parte de la cadena desde el en´esimo car´acter
# hasta el “em´esimo”, incluyendo el primero pero excluyendo el ultimo.

fruta = "banana"
# Si se omite el primer indicela porci´on comienza al principio de la cadena.
fruta[:3]
# Si omite el segundo ´ındice, la porci´on llega al final de la cadena. A
fruta[3:]

# Imprime toda la cadena
print(fruta[:])

# 7.5 Comparacion de cadenas
# Los operadores de comparacion trabajan para ver si dos cadenas son iguales
if "palabra" == "banana":
  print( "Si, no tenemos bananas!")  

# 7.6 Las cadenas son inmutables 
# Esto significa que no se puede cambiar una cadena existente  
saludo = 'Hola mundo'
# saludo[0] = "M" #error

# print(saludo) =======

# Lo m´as que puede hacer es crear una nueva cadena que sea una variaci´on de la original:

saludo = "Hola, mundo"  
nuevoSaludo = 'M' + saludo[1:]
print (nuevoSaludo)

# 7.7 Una funcion "encuentra"==========
# 7.8 Bucles y conteo==========

# 7.9 El m´odulo “string”==========
# string contiene funciones utiles ´ para manipular cadenas
# string.find()

# 7.10 Clasificacion de caracteres ==========
# EL modulo string tambien permite convertir cadenas a mayusculas y minisculas con 

# convierte a minisculas
cadena = "HAolsa"
# resultado = string.ascii_uppercase(cadena) 

# convierte a mayusculas
# resultado2 = string.ascii_uppercase(cadena)

# print(resultado, resultado2)





