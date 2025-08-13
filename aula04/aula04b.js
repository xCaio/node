const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res)=>{
    res.send('Seja bem vindo')
})
app.get('/data', (req, res)=>{
    res.json({name: 'Caio', age: 23, position: 'NodeJs Developer'})
})

app.listen(port || 3000, '', console.log("Servidor Iniciado"))