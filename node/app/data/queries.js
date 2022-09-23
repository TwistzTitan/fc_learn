const mysql = require('mysql')
const configs = require('../app.config.json')

const GetUsersNameQuery = "SELECT name FROM people"

const GetUserNameQuery = "SELECT name FROM people WHERE id = "

const getUsersNameQuery = (func) => {

    var connection = mysql.createConnection(configs.connection)
    
    connection.query(GetUsersNameQuery, func)

    connection.end
}

const getUserNameQuery = (id) => {

    var connection = mysql.createConnection(configs.connection)
    
    var getQuery = GetUserNameQuery+`${id}`

    connection.query(getQuery)

    connection.end
}

module.exports = {
    getUserNameQuery,
    getUsersNameQuery
}