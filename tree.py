class Node:
  def __init__(self, value):
    self.value = value
    self.childNodes = []
  def append(self, node):
    self.childNodes.append(node)
  def visit(self, fn):
    for node in self.childNodes:
      node.visit(fn)
    fn(self.value)
tree = Node(1)
tree.append(Node(2))
tree.visit(print)