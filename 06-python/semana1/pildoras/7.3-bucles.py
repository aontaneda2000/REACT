for i in range(5):
  print(type(i))


# Funciones de tipo f: interpola variables
for i in range(5):
  print(f"valor de la variable {i}")

# Funcion tipo range(5,50 , 3): 
for i in range(5, 50 , 3):
  print(f"valor de la variable {i}")


# Aplicionas complejas se utiliza un bucle con conteo numerico y la funcion len()

# Programa que recorra la longitud de un arreglo
# 1 inicia Variable en falsa
valido=False

# 2. Almacena valor
email=input('Introduce tu email')

# 3 Recorre el rango de la longitud del string que es un email
for i in range(len(email)):
  # 4 Condicion a evaluar
  if email[i] == "@":
    valido=True 

if valido:
  print('Email correcto')
else:
  print('Email incorrecto')
  
