(async()=>{
    const db = await require('./db')
    console.log("Consulta de clientes no banco de dados")
    await db.consultaCliente()
})()