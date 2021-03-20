const app = require('express')()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer, {
  // ...
})

io.on('connection', (socket) => {
  console.log('Connection from id = ', socket.id)
})

httpServer.listen(4444, () => {
  console.log('listening on 4444')
})
