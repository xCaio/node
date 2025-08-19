const connect = async()=>{
    if(global.connection && global.connection.state != 'disconnected'){
        return global.connection
    }
    const mysql = require('mysql2/promise')
    const connection = mysql.createConnection('mysql://root:root@localhost:3306/node_curso')
    console.log("Banco de Dados conectado com sucesso")
    global.connection = connection
    return connection
}

const consultaCliente = async()=>{
    const conn = await connect()
    const [buscaCliente] = await conn.query('SELECT * FROM cliente_node')
    console.log(buscaCliente)
    return buscaCliente
}


module.exports = {consultaCliente}