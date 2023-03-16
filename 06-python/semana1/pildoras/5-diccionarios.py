mi_diccionario={'Alemania': 'Berlin','Francia':'Paris'}
# Acceder por clave
print(mi_diccionario['Francia'])
# Agregar nuevo elemento
mi_diccionario['Ecuador']="Guayas"
# Sobrescribir clave-valor
mi_diccionario['Ecuador']="Quito"
# Eliminar elemento
del mi_diccionario['Alemania']


# Imprimir diccionario
print(mi_diccionario)

# Apartir de una lista crear un diccionario
mitupla=['España', 'Francia', "Reino Unido"]
mi_diccionario={mitupla[0]: "Madrid", mitupla[1]: "Francia"}

# Imprimir diccionario
print(mi_diccionario)

# 
midiccionario2 = {23: 'Jordan', "Nombre": "Michael", "anillos": (1992, 1993)}
# Guardar diccionario dentro otro diccionario conocido como subdiccionario
midiccionario3 = {23: 'Jordan', "Nombre": "Michael", "anillos": {"temporadas": (1992, 1993)}}

# Imprimir clave o keys del diccionario
print(midiccionario3.keys())
# Imprimir values o o valores del diccionario
print(midiccionario3.values())
# Longitud de mi diccionario
print(len(midiccionario3))




