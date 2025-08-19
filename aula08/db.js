const connect = async () =>{
    if(global.connection && global.connection.state != 'disconected'){
        return global.connection
    }
    const mysql = require('mysql2/promise')
    const connection = mysql.createConnection("mysql://root:root@localhost:3306/node_curso")
    console.log("Banco de Dados conectado com sucesso")
    global.connection = connection
    return connection
}

const todosClientes = async()=>{
    const connection = await connect()
    const [linhas] = await connection.query('SELECT * FROM cliente_node')
    return await linhas
}


module.exports = {todosClientes}