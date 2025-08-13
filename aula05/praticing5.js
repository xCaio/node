const http = require('http')
const fs = require('fs')
const port = process.env.PORT
const server = http.createServer((req,res)=>{
    fs.readFile('index.html', (err, arch)=>{
        return res.end(arch)
    })
})

server.listen(port || 3000, '', console.log("server initialized"))