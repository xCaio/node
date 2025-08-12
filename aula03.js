const http = require('http')
const port = 3000
const host = "127.0.0.1"
http.createServer((req,res)=>{
    res.writeHead(200, {
        'content-type': 'text/plain'
    })
    if(req.url == '/'){
        res.write('Seja bem vindo')
    }else if(req.url == '/quem'){
        res.write('quem???? quemm??? hã??')
    }else if (req.url == '/sobre'){
        res.write("Eu sou o Caio")
    }
    res.end()
}).listen(port, host, ()=>{console.log('Servidor rodando em: http:localhost:3000')})
