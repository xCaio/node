const connectDatabase = async()=>{
    if(global.connect && global.connect.state != 'disconnected'){
        return global.connect
    }
    const mysql = require('mysql2/promise')
    const connect = await mysql.createConnection('mysql://root:root@localhost:3306/node_curso')
    console.log("Conectado ao banco com sucesso")
    global.connect = connect
    return connect
}

const listarClientes = async()=>{
    const connect = await connectDatabase()
    const [listaClientes] = await connect.query('SELECT * FROM cliente_node')
    console.log(listaClientes)
    return listaClientes
}

const inserirCliente = async(client)=>{
    const connect = await connectDatabase()
    const sql = 'INSERT INTO cliente_node (nome, idadel) VALUES (?,?)'
    const parameters = [client.nome, client.idadel]
    await connect.query(sql,parameters)
    console.log("Novo cliente cadastrado com sucesso")
    return connect
}


module.exports = {listarClientes, inserirCliente}