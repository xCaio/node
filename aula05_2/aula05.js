const http = require('http')
const fs = require('fs')
const port = process.env.PORT

const server = http.createServer((req, res)=>{
    fs.readFile('site.html', (err, arquivo)=>{  //readFile é ler o arquivo passado onde está o 'site.html' e o parâmetro "arquivo" é o retorno de onde foi passado o 'site.html'
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(arquivo) // usando o retorno do "arquivo"
        res.end()
    })
})
server.listen(port || 3000, '', console.log("Servidor Iniciado"))