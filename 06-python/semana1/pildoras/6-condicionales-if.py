# 1 Inicia programa
print('Inicio...')

# 2 Funcion input: Programa espera que introduzcamos un valor por teclado para guardarlo en la variable; recibe str para mostrat msm al user
nota_alumno = input('Introduce nota') 

  #           Zona de argumentos: recibe nota
def evaluacion(nota):
  valoracion="aprobado"
  # 4. Evalua variable
  if nota < 5:
    valoracion="suspenso"
  # Retorna valor al usuario
  return valoracion


# 3. Llamada ala funcion y se envia el valor de la variable (nota alumno) y viaja a la zona de argumentos para realizar la evaluacion
print(evaluacion(int(nota_alumno)))

print('Programa de evaluacion de notas')
