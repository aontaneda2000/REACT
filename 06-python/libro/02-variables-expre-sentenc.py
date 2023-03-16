# 2 Variables, expresions y sentencias
# 2.1 Valores y tipos
# Los valores que se ha visto son los int (integer en ingles) o enteros, los str (strings en ingles ) o cadena que estan encerrados entre comillas y los float (floating bot en ingles) o coma flotantes.
# Es importante que los numeros encerrados entre comillas son considerados como strings y los numeros separados por comas es considera una tupla

print('========Valores y tipos ========')
# Como averiguar el tipo de valor? se utiliza type()
# 1. string
name = 'Aaron'
numbers = '12' #python lo interpreta como string
print(type(name))
print(type(numbers))

# 2. int
age = 22
print(type(age))

# 3. float
pi = 3.14
numspoints= 1, 000 , 000 #Python interpreta que el numero debe repetirse 3 veces
print(type(pi))
print(type(numspoints)) 
print(numspoints)

print('======== Variables ========')

# 2.2 Variables
# La sentencia de asignacion "=" crea nuevas variables y asigna un valor.
# Print tambien funciona con variables.
# El tipo de la variable hace referencia al tipo de valor que contiene.

# Asignacion de variables
age = 22
type(age)




# 2.3 nombres de variables y palabras reservadas
# N.V: 1- Los nombres de variables son asignadas por el programador para documentar cual es el uso de esa variables.
# 2- Se puede utilizar el nombre de variables en mayus pero no es recomendable. Tambien es importante que si se declara una variable con mayus  hay que distinguir que "Bruno" no es lo mismo que "bruno"
Bruno = 12
bruno = 12

# 3- Se puede nombrar una variables con guiones bajos cuando es muy larga:
precio_del_cafe_colombiano = 22.2

# 4- No se debe utilizar numeros y signos al comienzo.

# P.R: No se pueden asignar nombres de variables a palabras reservadas como if, class etc. Ya que estas palabras tienen un uso y reglas.
# if = 12 //err0r


# 2.4 Sentencias
# Es una instruccion que ejecuta el interprete de python como print y la asignacion
print(1)
x= 2
print(x)


# 2.5 Evaluar expresiones
# Una expresion es una combinacion de operadores, variables y valores.
num1 = 12
num2 = 13

resultado = num1 + num2
print(resultado)


# 2.6 Operadores y expresiones
# Los operadores sirven para realizar calculos matematicos, en python funcionan de la misma manera como en matematica: + , - , *, ** , / y agrupamiento de operaciones (5-2) * 2
print(5**2)
print((5-2) * 2)
# En la division siempre se va a redondear a la baja porque python hace una division de enteros
print(5/2)

# 2.7 Orden de operaciones
# En python las operaciones dependen de las reglas de precedencia por lo cual siguen el mismo orden que en matematicas y se basa en el acronimo PEMDAS 
# Los operadores que tienen la misma precedencia se evaluan de izq  a der

# Parentesis: Por precedencia se puede elegir que queremos evaluar primero.
print((4-4) * 3)
# Exponienciacion: Es la siguiente que tiene mayor precedencia
print(3*1**3)
# Mutiplicacion y division: Ambas tienen la misma precedencia pero son mayores a + y -

# Adicion y sustraccion: Ambas tienen la misma precedencia



# 2.8 Las operaciones sobre cadenas
# 1 Es imposible realizar operaciones con cadenas que parezcan numeros.
# 2 El operador + en cadenas representa la concatenacion
fruta = 'manzana'
verdura = 'brocoli'
print('A ella le gusta la ' +  fruta + ' y la ' + verdura)

# 3 El operador * en cadenas representa la repeticion de cadenas es decir:
verdura = 'brocoli '
print(verdura*3)


# 2.9 Composicion
# Es ilegal realizar minute+1 = 2
# 1 Se puede ensamblar en la sentencia print numeros, variables y cadenas.
print('Resultado de la multiplicacion: ', 2*2 )

# 2 Expresiones arbitrarias al lado de derecho de la asignacion
resultado = 2*(1+1)
print(resultado)

# 2.1 Comentarios
# Los comentarios sirven para documentar el codigo para futuros progamadores porque a medida que va creciendo el programa es dificil averiguar para que sirve un trozo de codigo.
# 1 Es posible realizar un comentario en una linea y a lado de una sentencia.


