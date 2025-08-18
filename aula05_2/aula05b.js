const http = require('http')
const port = process.env.PORT
const fs = require('fs')

const server = http.createServer((req, res)=>{
    fs.appendFile('site.txt', 'Quero esse conteudo no arquivo', (err)=>{
        if(err)throw err
        console.log("Arquivo Criado")
        res.end()
    })
})

server.listen(port || 3000, '', console.log("Servidor Inicializado"))