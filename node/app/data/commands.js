const mysql = require('mysql')
const configs = require('../app.config.json')

const CreateUserNameQuery = "INSERT INTO people (name) VALUES "

const createUserNameCommand = (name, func) => {

    var connection = mysql.createConnection(configs.connection)

    var createQuery = CreateUserNameQuery+`(\'${name}\')`
    
    connection.query(createQuery,func)

    connection.end
}

module.exports = {
    createUserNameCommand,
}