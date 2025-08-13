const http = require('http')
const fs = require('fs')
const port = process.env.PORT

const server = http.createServer((req, res)=>{
    fs.appendFile('teste.txt','Curso de Node JS ', (err)=>{
        if(err) throw err
        console.log("Arquivo criado")
        
    })
})

server.listen(port || 3000, '', console.log("Servidor Iniciado"))