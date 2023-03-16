# 1 Recorriendo listas
for i in ['Pildoras informaticas' , 3]:
  print('Hola', end=' ')

# 2 Recorriendo string: evaluando si el correo electronico es correcto

# 2.1 Inicio programa: Variable inicializada Falsa
email=False;

# 2.2 Recorrer letra por letra el correo electronico
for i in 'steveontaneda@gmail.com':
  # 2.3 condicion a evaluar 
  if(i=='@'):
    # 2.4 reasignacion de variable
    email=True

# 2.5 Condicion a evaluar
if(email==True):
  print('Email es correcto')
else:
  print('El email no es correcto')

# 3 recorriendo string: correo electornico ingresado por el usuario

# 3.1 Inicio programa: Variable inicializada Falsa
emailDos=False;

# 3.2 Introduce valor
miEmail=input('introduce tu email')

for i in miEmail:
  if(i=='@'):
    emailDos=True

# Valor hace referencia a true o false
if emailDos:
  print('Email correcto')
else:
  print('Email incorrecto')

# 3 recorriendo string: correo electornico ingresado por el usuario, evaluando que contengan @ y el punto con acumulador

contador=0
miEmail2=input('Introduce tu direccion de email')

for i in miEmail2:
  if i == '@' or i == '.':
    contador = contador +1

if emailDos==2:
  print('Email correcto')
else:
  print('Email incorrecto')



# 4 F. range: Crear una especie de array de 5 elementos que van desde el indice 0 hasta el 4
for i in range(5):
  print('Hola', i)

