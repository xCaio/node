const http = require('http')
http.createServer((req, res) => {
    res.writeHead(
        200,
        '{content-type:text-plain}'
    )
    res.write("Praticando Solo")
    res.end()
}).listen(3000)