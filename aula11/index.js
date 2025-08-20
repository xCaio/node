const http = require('http')
const port = process.env.PORT || 3000
const events = require('events')
const EventoEmissor = new events.EventEmitter()

const final = () =>{console.log("Fim do processo")}

EventoEmissor.on('msg', ()=>{console.log("Curso de Node")})
EventoEmissor.on('fim', final)


const server = http.createServer((req, res)=>{
    EventoEmissor.emit('msg')
    res.writeHead(200, {'content-type': 'text/html'})
    res.write("<p>Seja bem vindo</p>")
    EventoEmissor.emit('fim')
    res.end()
})
server.listen(port, '', console.log("Servidor rodando"))