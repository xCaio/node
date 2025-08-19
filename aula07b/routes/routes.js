const express = require('express')
const routes = express.Router()

const listaDeTimes = [
    {time: "atletico-mg", posicao: '1º'},
    {time: "flamengo", posicao: '2º'},
    {time: "botafogo", posicao: '3º'},
    {time: "palmeiras", posicao: '4º'},
    {time: "vasco", posicao: '5º'},
    {time: "cruzeiro", posicao: '6º'},
]

routes.get('/', (req, res)=>{
    res.send("Seja bem vindo a página")
})

routes.get('/:timeid', (req, res)=>{
    const pesquisaTime = req.params.timeid
    const buscaTime = listaDeTimes.find((element)=> element.time === pesquisaTime)
    if(!buscaTime){
        res.status(404).json({
            erro: "Time não encontrado", timePesquisado: pesquisaTime
        })
    }else{
        res.status(200).json(buscaTime)
    }

})
module.exports = routes