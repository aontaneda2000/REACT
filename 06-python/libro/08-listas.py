# 08 Listas
# Es un conjunto ordenado de valores identificados por un indice que empiezan desde 0,1,2,3,4.. y conocidos como elementos.
#son similares a las cadenas de texto (strings), que son conjuntos ordenados  de caracteres, excepto en que los elementos de una lista pueden ser de cualquier tipo.

# 8.1 Valores de una lista
# Lista con valores enteros
lista = [1, 2, 3]

# Lista con valores de cadena
cadena = ['Aaron', 'Steven']

# Lista anidada
listAnidada  =[1, 2, 3, [4,5]]

# Listas que contienen numeros consecutivos por la funcion range que toma dos argumentos: Indica de donde empieza la lista hasta que termina
print(range(1, 5))

# Lista que toma un arg: crea una lista que empieza desde 0:
print(range(1))

# Lista que toma 3 arg: Crea una lista que empieza desdel 1 pero va de dos en dos hasta el 10
res = range(1,10,2)
print(res)

# lista vacia
[]

# Se puede asignar listas a variables 

numeros = [12, 21]

# Pasar listas comoo parametros a funciones
def tomarLista(lista):
  return lista

imprimir_lista = tomarLista([1,2])
print(imprimir_lista)

# 8.2 Acceso a los elementos
# Operador [] -> dentro especifica el indice

# Indice negativo: Trae el ultimo elemento de la lista

# Variable indice para recorrer una lista con whileo con for

frutas = ['pera', 'uvas']
for i in frutas:
  print([i])


# 8.3 Longitud de una lista

# 

# Es comun recorrer listas con bucles while con la funcion len()


# 8.4. Pertenencia a una lista

# Operador in sirve para verificar si un elementoe xiste en una lista

numeros = [1,2,3]
1 in numeros
# Operador not en con in para comprobar si un elemento no es miembro de una lista:


# 8.5. Listas y bucles for

# 8.6. Operaciones con listas
# El operador + concatena listas
a = [1,2,3]
b = [1,2,3]

c = a + b
print(c)

# El operador * repite los elementos de las listas segun lo especificado

repetirLista= [0] * 4

# 8.7. Porciones (slices)
# Se puede acceder a las porciones con el operador [] similar a las cadenas.

# 8.8. Las listas son mutables
# Esto significa que podemos modificar unos de sus elementos de las lista


colores = ['rojo', "azul", "azul"]

colores[0] = 'negro'
colores[-1] = 'negro'

# 8.9 Borrado en una lista
# Para eliminar un elemento de la lista se utiliza del


# 8.10. Objetos y valores
# Cada variables es un objeto y tiene un identificador unico


# 8.11. Alias (poner sobrenombres)


#8.12. Clonar listas
