const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2709',
    database: 'MedicalService'
});

module.exports = connection;