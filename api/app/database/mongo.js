module.exports = app => {

    var database = {}

    database.ConnectionMongo = function () {
        
        return { 
            url : "mongodb://admin:user@host:port/?authSource=admin",
            config: { useNewUrlParser: true }
        }

    }

    return database

}
