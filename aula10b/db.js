const connectDatabase = async()=>{
    const mysql = require('mysql2/promise')
    const connection = mysql.createConnection('mysql://root:root@localhost:3306/cliente_node')
    // console.log("Banco de Dados Conectado")
    global.connection = connection
    return connection
}

const obterClientes = async()=>{
    const connection = await connectDatabase()
    const sql = 'SELECT * FROM users'
    const [clientes] = await connection.query(sql)
    console.log(clientes)
    return clientes
}
const inserirCliente = async(cliente)=>{
    const connection = await connectDatabase()
    const params = [cliente.nome, cliente.idade]
    const sql = 'INSERT INTO users (nome, idade) VALUES (?,?)'
    await connection.query(sql,params)
    return connection
}
const alterarCliente = async(id,cliente)=>{
    const connection = await connectDatabase()
    const sql = 'UPDATE users SET nome=?, idade=? WHERE id=?'
    const params = [cliente.nome, cliente.idade, id]
    await connection.query(sql, params)
    return connection
}

const deletarCliente = async(id)=>{
    if(!id || isNaN(id)){
        console.log("O ID Digitado é inválido")
        return false
    }
    try{
        const connection = await connectDatabase()
        const sql = 'DELETE FROM users WHERE id=?'
        const params = [id]
        const [result] = await connection.query(sql,params) 
        if(result.affectedRows > 0){
            return true
        }else{
            return false
        }

    }catch(err){
        console.error("Erro ao excluir o cliente: ", err.message)
        return false
    } finally{
        if(connection){
            await connection.end()
        }
    }
}

module.exports = {obterClientes, inserirCliente, alterarCliente, deletarCliente}