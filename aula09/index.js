(async()=>{
    const db = require('./db')
    console.log('Inserindo Cliente')
    await db.inserirCliente({nome: "Testando outro parametro", idadel: 18})
    await db.obterCliente()
})()