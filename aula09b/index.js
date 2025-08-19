(async ()=>{
    const db = require('./db')
    const nom = "Novo"
    const ida = "15"

    await db.inserirCliente({nome: nom, idadel: ida})
    await db.listarClientes()
})()