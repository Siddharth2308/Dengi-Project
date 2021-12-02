const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "postgres",
    database: "boutique_management",
    multipleStatements: true
});

mysqlConnection.connect((err) =>{
    if(!err){
        console.log("Connection Established");
    } else console.log("Connection Failed");
})

module.exports = mysqlConnection;