# 1. Inicio programa
print('Verificacion de acceso')

# 2 F.input: Almacena valor transformado a entero
edad_usuario=int(input('Introduce tu edad, por favor'))

# 3 Evaluar valor de variable de F.input
if edad_usuario<18:
  print('No puedes pasar')
# 4 Bloque else: Acompañado del bloque if mas cercano y si no es verdad ejecuta este bloque
else:
  print('Puedes pasar')

  
# Ejemplo 2 nota alumnos
# 1. Inicio programa
print('Inicio segundo programa')

# 2. F. input almacena valor
nota_alumno= int(input('Introduce la nota del alumno'))

# 3 Evalua cada una de las variables para devolver un resultado
if nota_alumno < 5:
  print('Insuficiente')
elif nota_alumno < 6:
  print('Suficiente')
elif nota_alumno < 8:
  print('Excelente')
elif nota_alumno < 10:
  print('Sobre saliente')
else:
  print('CRACK')

  
  







