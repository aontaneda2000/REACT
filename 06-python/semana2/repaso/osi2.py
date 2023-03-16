import socket 

s = socket.socket()

print('scoket created')

port = 9000

s.bind(('', port))


s.listen(5)

response = {'status': 'success'}

while True:

  c, addr = s.accept()

  print('get connection', addr)
  c.close()
  print('Socket terminado')


  break;