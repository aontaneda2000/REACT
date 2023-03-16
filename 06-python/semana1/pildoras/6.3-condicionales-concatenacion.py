edad= 7

if 0<edad<100:
  print('Edad es correcta')
else:
  print('Edad incorrecta')


# Programa: Evaluar el salario de los trabajadores  que trabajan en una empresa

# 1 inicio programa 

# 2. F. input almacena valor en variable
# 3 Introducir valor por teclado
salario_presidente=int(input('Introduce salario presidente'))
print('Salario presidente: '+  str(salario_presidente))

# 4 Introducir valor por teclado
salario_director=int(input('Introduce salario_director'))
print('salario_director: '+  str(salario_director))

# 5 Introducir valor por teclado
salario_jefe=int(input('Introduce salario_jefe'))
print('salario_jefe: '+  str(salario_jefe))


# 6 Introducir valor por teclado
salario_administrativo=int(input('Introduce salario salario_administrativo'))
print('salario_administrativo: '+  str(salario_administrativo))

# 7 Condiciones a evaluar de variables
if salario_presidente<salario_director<salario_jefe<salario_administrativo:
  print('Todo funciona correctamente')
else:
  print('Algo falla en esta empresa')