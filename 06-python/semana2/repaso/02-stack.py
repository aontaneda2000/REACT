from dataclasses import dataclass


@dataclass

class Pila:

  elements = []

  def push(self, element):
    self.elements.append(element)


pila = Pila()

print(pila.push())