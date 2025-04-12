const mysql = require ("mysql");
const connect = mysql.createConnection({

    host: "localhost",
    port: 3306,
    password: "ifto#25",
    database: "crud",
    user: "root"

});

module.exports = connect;