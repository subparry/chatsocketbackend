const app = require('express')()
const cors = require('cors')
app.use(cors())
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer, {
  path: '/chat',
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'OPTIONS'],
  },
})

io.on('connection', (socket) => {
  socket.on('join-room', (roomName) => {
    socket.join(roomName)
  })

  socket.on('send-message', (msg) => {
    io.sockets.in('General').emit('message-echo', msg)
  })
})

httpServer.listen(4444, () => {
  console.log('listening on 4444')
})
