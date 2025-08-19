const conectar = async ()=> {
    if(global.connection && global.connection.state != 'disconnected'){
        return global.connection
    }
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection('mysql://root:root@localhost:3306/node_curso')
    console.log("Banco de Dados Conectado com sucesso")
    global.connection = connection
    return connection
}
 
const obterClientes = async()=>{
    const conn = await conectar()
    const [linhas] = await conn.query('SELECT * FROM cliente_node')
    console.log(linhas)
    return linhas
}

module.exports = {obterClientes}