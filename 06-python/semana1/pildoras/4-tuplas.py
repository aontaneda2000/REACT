mitupla = (1, 'Aaron', 21)

# Imprimir valores
print(mitupla[:])
# Generar nueva tupla con porciones
print(mitupla[1:])
# desempaquetado de tupla:  asigna por orden la variable a los valores de tupla
number, name, age = mitupla;
print(age, name, number)
# Devuelve n veces que se repite enla tupla
print(mitupla.count('Aaron'))
# Longitud
print(len(mitupla))
# Busca elemento: t or f
print('Aaron' in mitupla)
# Convertir tupla a lista
milista= list(mitupla)
print(milista)
# Convertir lista a tupla
mitupla = tuple(milista)
print(mitupla)
