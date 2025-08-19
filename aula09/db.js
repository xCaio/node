const conectar = async()=>{
    if(global.connection && global.connection.state != 'disconnected'){
        return global.connection
    }
    const mysql = await require('mysql2/promise')
    const connection = await mysql.createConnection('mysql://root:root@localhost:3306/node_curso')
    console.log("Banco de Dados conectado com sucesso")
    global.connection = connection
    return connection
}

const obterCliente = async()=>{
    const connection = await conectar()
    const [buscaCliente] = await connection.query('SELECT * FROM cliente_node')
    console.log(buscaCliente)
    return await buscaCliente
}

const inserirCliente = async(cliente)=>{
    const connection = await conectar()
    const sql = 'INSERT INTO cliente_node (nome, idadel) VALUES (?,?)'
    const params = [cliente.nome,cliente.idadel]
    await connection.query(sql,params)
    return await connection
}


module.exports = {obterCliente, inserirCliente}