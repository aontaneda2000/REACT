# value = int(input('Size of the tree: '))
# for i in range(value-1):
#   for s in range(-value, -i):
#     print(' ', end='')
#   for j in range(i+1):
#     print('* ', end='')
#   print()

value = int(input('Size of the tree: '))
for i in range(value):
    for s in range(0, i):
        print(' ', end='')
    for j in range(i, value):
        print('* ', end='')
    print()


