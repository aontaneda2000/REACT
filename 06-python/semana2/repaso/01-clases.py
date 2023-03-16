from dataclasses import dataclass

# Primera forma con funcion constructora
class Person:

  def __init_(self, name,profession) -> None:

    self.name = name
    self.profession = profession
    self.skills = []

  def add_skill(self, skill):
      self.skills.append(skill)

# Segunda forma
@dataclass
class Vehicle:
  brand:str
  year:str 


# Instancias
vehicle = Vehicle('Ford', 2000)

print()