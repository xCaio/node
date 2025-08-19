(async ()=>{
    const db = require('./db')
    // console.log("CLIENTE INSERIDO")
    // await db.inserirCliente({nome:'PraticandoSolo', idadel:10})
    
    const id = 9
    const name = "Nome alterado novamente"
    const age = 33
    
    // console.log(`ATUALIZANDO CLIENTE do id ${id}`)
    // await db.atualizaCliente(id,{nome: name, idadel: age})

    console.log(`Cliente do id ${id}, foi deletado`)
    await db.deletarCliente(6)

    console.log("CLIENTES OBTIDOS")
    await db.obterClientes()
})()