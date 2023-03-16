# Libreria de pythoon
from dataclasses import dataclass

# 1 forma de crear clase predeterminada
class Person:

  # constructor : # __init__ 
  # self:
  # None: define lo que va a retornar la funcion
  def __init__(self, name:str, profession:str) -> None:
    self.name = name
    self.profession = profession
    self.skill = []

  def add_skill(self, skill):
    # Agrega nueva skill a la lista vacia
    self.skill.append(skill)

  # Magic functions retorna un string
  def __str__(self) -> str:
    return f'Iam {self.name} and my profession is {self.profession}'

# 2 forma de crear una clase con:
@dataclass
class Vehicle:

  brand:str
  year:str

  def __str__(self) -> str:
    return f'The brand of the car is {self.brand} and year is {self.year}'



# Instancias acceden a la informacion de la clase 1
person = Person('Jorge', 'Engineer')

# Agrega valor a la lista.
person.add_skill('PYTHON')
person.add_skill('POO')
print(person) 

print(person.name)
print(person)

# Instancias acceden a la informacion de la clase 2
vehicle = Vehicle('BMW', '2000')
print(vehicle)






# Funciones magicas o magic functions
# Dunder function
  # __str __init_
# dataclass
# 

