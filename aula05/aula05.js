const http = require('http')
const fs = require('fs')
const port = process.env.PORT

const server = http.createServer((req, res)=>{
    fs.readFile('index.html', (err, arquivo)=>{
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

server.listen(port || 3000, '', console.log("Servidor Iniciado"))