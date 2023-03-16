 


# 1. Programa con sentencia continue

# 1.1 Inicia programa
nombre = 'Pildoras informaticas'

# 2. Variable iniciada
contador = 0

# 3. Recorer string
for i in nombre:

# 4. condicion a evaluar
  if i == " ":
    # 5. Salto a la siguiente vuelta de bucle
    continue
  # 6. Aumenta contador
  contador+=1  # contador = contador +1

# 7.
print(contador)


# 2. Programa instruccion pass: Devuelve un nulo


# 2. Programa evalua un email.
email=input('Introduce tu email, por favor; ')

for i in email:
  if i == '@':
    arroba =True
    break; 

# Se ejecuta este bloque cuando sale del bucle for.
else:
  arroba=False

print(arroba)


