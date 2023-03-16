import math

#  1 Comofunciona un bucle while?
i=1


while i<=10:
  print('Ejecucion '+ str(i))
  i= i +1

print('Termino la ejecucion')

# 2 Programa que pide la edad al usuario y que no permite ingresar numeros negativos

edad=int(input('Introduce tu edad por favor'))

while edad<0:
  print('Has introducido una edad negativa. Vuelve a intentarlo ')
  edad=int(input('Introduce tu edad por favor'))

print('Gracias por colaborar. puedes pasar')
print('Edad del aspirante' + str(edad))




# Programa que calcule la raiz cuadrada de un numero, el usuario no podra ingresar numeros negativos y solo tendra dos intentos.

# INicio programa
print('Programa de calculo de raiz cuadrada')

# 2.Pide valor por teclado para Almacena valor en variable
numero=int(input('Introduce un numero por favor: '))

# 3. inicializar variable acumulador
intentos=0

# 4 Condicion a evaluar: Tiene que esperar que sea falsea
while numero<0:
  print('No se puede hallar la raiz de un numero negativo')
  
  # 5 Condicion a evaluar: Ignora a primera vuelta del bucle
  if intentos == 2:
    print('Has consumido demasiados intentos. El programa ha finalizado')
    break;

# 6 Vuelve a pedir un numero positivo al usuario
  numero = int(input('Introduce un numero por favor: '))
  # 7 Condicion a evaluar: Si vuelve a introducir un numero negativo 
  if(numero<0):
    #  8 Acumulara valor en variable intentos.
    intentos = intentos +1

# 9 Condicion a evaluar 
if intentos<2:
  # 10 Resolver raiz cuadrada
  solucion = math.sqrt(numero)
  # 11 Imprimir 
  print('La raiz cuadrada de' + str(numero) + "es" + str(solucion))

  


