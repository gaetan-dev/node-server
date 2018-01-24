import app from './app'
import http from 'http'
import 'colors'

const port = process.env.PORT || 3000

const server = http.createServer(app)
server.listen(port, () => {
  console.log('✔ Server listening on port'.green, String(port).cyan)
})
