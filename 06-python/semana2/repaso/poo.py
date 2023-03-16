from abc import ABC, abstractmethod


# Funcion de crear un template que se va a utilizar 
# Lo que lo hace abstracto es que no va a retornar nada
class Person(ABC):
  def __init__(self, name, age) -> None:
    self.name = name
    self.age = age

    @abstractmethod
    def say_hello(self):
      '''this method should be implement  '''
    

