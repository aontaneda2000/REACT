from abc import ABC,  abstractmethod

# Permite crear metodos que no retornaran anda
# Clases abstractas contienen init
# Una clase abstracta no genera instancias
class Person(ABC):
  def __init__(self,name, age ) -> None:
    self.name = name
    self.age = age

  @abstractmethod
  def say_hello(self):
    """ this method by subclass """
  
  @abstractmethod
  def say_bye(self):
    """ this method should by subclass"""
  
  def __str__(self) -> str:
    return f'{self.name} {self.age} '
  

class Studen(Person):

  def __init__(self, name, age,  school) -> None:
    super().__init__(name, age)
    self.school = school
    self.__is_enabled= True

  def say_hello(self):
    return f'Hello my name is {self.name}'
  
  
