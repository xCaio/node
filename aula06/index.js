// utilizando o repl.it

const http = require('http')
const port = process.env.PORT
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>Olá Mundo</h1>')
    res.end()
})

server.listen(port || 3000, '', console.log("Servidor Inicializado"))
