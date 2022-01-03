const Client = require("pg")

module.exports = app => {

    var database = {}

    database.ConnectionPostgres = function() {

        var connection = Client.Pool({
            host: process.env.DATABASE_POSTGRES_HOST,
            database: process.env.DATABASE_POSTGRES_NAME,
            user: process.env.DATABASE_POSTGRES_USER,
            password: process.env.DATABASE_POSTGRES_PASS,
            port: process.env.DATABASE_POSTGRES_PORT
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
