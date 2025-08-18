const express = require('express')
const routes = express.Router()

let cursosInfo = [
    {'curso': 'node','info': 'curso de node'},
    {'curso': 'react','info': 'curso de react'},
    {'curso': 'java','info': 'curso de java'},
    {'curso': 'arduino','info': 'curso de arduino'}
]

routes.get('/', (req, res)=>{
    res.json({'olá': "Seja bem vindo"})
})

routes.get('/:cursoid', (req, res)=>{
    const curso = req.params.cursoid
    let cursoI = cursosInfo.find(i => i.curso == curso)
    if(!cursoI){
        res.status(404).json(
            {erro: 'Curso não encontrado', cursoPesquisado: curso}
        )
    }else{
        res.status(200).json(cursoI)
    }
})

module.exports = routes