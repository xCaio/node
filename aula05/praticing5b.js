const http = require('http')
const fs = require('fs')
const port = process.env.PORT

const server = http.createServer((req, res)=>{
    fs.appendFile('NovoArquivoCriado.txt', 'Criando esse novo arquivo TXT ok', (err)=>{
        if(err)throw err
        return res.end()
    })
})
server.listen(port || 3000, '', console.log("server initialized"))