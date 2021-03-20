const app = require('express')()
app.use(cors())
const httpServer = require('http').createServer(app)
const cors = require('cors')
const io = require('socket.io')(httpServer, {
  // ...
})

io.on('connection', (socket) => {
  console.log('Connection from id = ', socket.id)
})

httpServer.listen(4444, () => {
  console.log('listening on 4444')
})
