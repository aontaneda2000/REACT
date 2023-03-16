# Programa: Evaluar distancia a la que vive un alumno del colegio, salario, hermanos para darle una beca para que estudie  : 

# distancia > 40km. necesita beca
# numero de hermanos > 5 necesita beca
# salario familiar <= 200000

# 1. Inicio programa
print('Programa becas años')

# 2. F.input: introducir valores
distancia_escuela=int(input('Introduce la distancia ala escuela en km'))
print(distancia_escuela)

# 2. F.input: introducir valores
numero_hermanos=int(input('Introduce el n° hermanos en el centro '))
print(numero_hermanos)

# 2. F.input: introducir valores
salario_familiar=int(input('Introdfuce salario anual bruto'))
print(salario_familiar)

# 3 Evaluar variables almacenadas
if distancia_escuela > 40 and numero_hermanos>2 and salario_familiar<=20000:
  print('Tienes derecho a beca')
else:
  print('No tienes derecho a beca')

# 4 Segunda evaluacion de variable con operador or: Si nada de  lo anterior es cierto pues mire a ver si el salario es menor
if distancia_escuela > 40 and numero_hermanos>2 or salario_familiar<=20000:
  print('Tienes derecho a beca')
else:
  print('No tienes derecho a beca')


# Programa que Alumno de C. informatica que tiene que escojer una materia optativa   de las tres.
print('Asignaturas optativas Año 2022')
# 2 Muestra mensaje
print('Asignaturas optativas: Informatica grafica - Pruebas de software - Usabilidad y acceso')
# 3 F. input introduce el valor para almacenarlo
opcion=input('Escribe la asignatra escogida: ')
# 4 Transforma texto a minisculas
asignatura = opcion.lower()

# 5 Evalua si el texto introducido por el usuario existe o es verdadero.
if asignatura in ('Informatica grafica', 'Pruebas de software', 'Usabilidad y acceso'): 
  print('Asignatura escojida: ' + asignatura)
else:
  print('La asignatura escojida no esta contemplada')
