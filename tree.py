def make_counter(x):
  print('entering make_counter')
  yield x                    
  print('incrementing x')
  x = x + 1
counter = make_counter(2) 
import itertools
print 
