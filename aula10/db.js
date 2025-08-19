const connectDatabase = async()=>{
    if(global.connect  && global.connect.state != 'disconnected'){
        return global.connect
    }
    const mysql = require('mysql2/promise')
    const connect = await mysql.createConnection('mysql://root:root@localhost:3306/node_curso')
    console.log("Conectado ao banco com sucesso")
    global.connect = connect
    return connect
}

const obterClientes = async() =>{
    const conn = await connectDatabase()
    const [listaClientes] = await conn.query('SELECT * FROM cliente_node')
    console.log(listaClientes)
    return listaClientes
}
const inserirCliente = async(cliente)=>{
    const conn = await connectDatabase()
    const params = [cliente.nome, cliente.idadel]
    const sql = 'INSERT INTO cliente_node (nome,idadel) VALUES (?,?)'
    await conn.query(sql, params)
    return await conn
}
const atualizaCliente = async(id,cliente)=>{
    const conn = await connectDatabase()
    const sql = 'UPDATE cliente_node SET nome=?, idadel=? WHERE id=?'
    const params = [cliente.nome, cliente.idadel, id]
    await conn.query(sql,params)
    return conn
}

const deletarCliente = async(id)=>{
    const conn = await connectDatabase()
    const sql = 'DELETE FROM cliente_node WHERE id=?'
    const params = id
    await conn.query(sql,params)
    return await conn
}



module.exports = {obterClientes, inserirCliente, atualizaCliente,deletarCliente}