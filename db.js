const mysql = require ('mysql')

function connect(){
    const connection= mysql.createConnection({
        host:'192.168.0.106',
        user: 'root',
        password:'root',
        database:'db1',
        port:9099
    })
    connection.connect()
    return connection
}
module.exports ={
    connect: connect
}