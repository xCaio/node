const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res)=>{
    res.send("Seja bem vindo")
})
app.get('/test', (req, res)=>{
    res.send("Retornando teste no body")
})
app.get('/json', (req, res)=>{
    res.json({'name': 'json file', 'return': 'true', 'test': 'successfully'})
})

app.listen(port || 3000, '', console.log('Servidor rodando'))