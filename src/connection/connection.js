const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'devuser',
    password: 'hanafiantho301190',
    host: 'localhost',
    database: 'ujianbackend',
    port: '3306'
})

module.exports = conn