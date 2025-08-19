const express = require('express')
const port = process.env.PORT || 3000
const routes = require('./routes/routes')
const app = express()
app.get('/', routes)
app.get('/:timeid', routes)

app.listen(port, '', console.log("Servidor Iniciado"))
