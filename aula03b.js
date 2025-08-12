const http = require('http')
const url = require('url')
const port = 3000
const host = "127.0.0.1"

http.createServer((req,res)=>{
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    res.write(req.url)
    const parametro = url.parse(req.url, true).query
    res.write('<br/>'+parametro.nome)
    res.write('<br/>'+parametro.idade)
    res.end()
    //http://localhost:3000/?nome=caio&idade=23
}).listen(port, host, ()=>{console.log('Servidor rodando em: http:localhost:3000')})
