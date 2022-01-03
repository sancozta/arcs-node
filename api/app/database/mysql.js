const Mysql = require("mysql")

module.exports = app => {
    
    var database = {}

    database.ConnectionMysql = function() {

        var connection = Mysql.createConnection({
            host: process.env.DATABASE_MYSQL_HOST,
            user: process.env.DATABASE_MYSQL_USER,
            password: process.env.DATABASE_MYSQL_PASS,
            database: process.env.DATABASE_MYSQL_NAME,
            port: process.env.DATABASE_MYSQL_PORT
        })

        connection.connect(function (err) {
            if (err) {
                console.error("Error connecting in database !" + err.stack);
                return null;
            }
            console.log("Server connected in database !");
        })

        return connection
        
    }

    return database

}
