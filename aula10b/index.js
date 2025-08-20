(async () => {
    const db = await require('./db')
    console.log("Conectado ao banco de dados")
    let name = "Teste"
    let age = 22
    let id = 2

    // await db.inserirCliente({nome: name, idade: age})

    // await db.alterarCliente(id,{nome: name, idade: age})
    // console.log(`O cliente do id ${id} foi alterado`)

    if (await db.deletarCliente(id)) {
        console.log(`✅ O cliente de ID ${id} foi excluído do banco de dados`);
    } else {
        console.log(`❌ O ID ${id} não consta no banco de dados ou é inválido`);
    }


    await db.obterClientes()
})()