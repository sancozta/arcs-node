module.exports = app => {
    //LISTANDO OS METODOS
    var api = {}

    //LISTAR USUARIOS
    api.UserAll = (req, res, next) => {
        //CONECTANDO AO BANCO DE DADOS
        var connection = app.database.mysql.ConnectionMysql()

        //DETEMINANDO A QUERY
        sql = "select * from user"

        //EXECUTANDO A QUERY
        connection.query(sql, function(err, rows) {
            if (err) throw err
            res.json(rows)
        })

        //FINALIZANDO A CONEXAO
        connection.end()
    }

    //LISTAR UM USUARIO
    api.UserFilter = (req, res, next) => {
        //CONECTANDO AO BANCO DE DADOS
        var connection = app.database.mysql.ConnectionMysql()

        //DETEMINANDO A QUERY
        sql = "select * from user where id = ?"

        //DETERMINANDO PARAMENTROS
        fields = [req.params.id]

        //EXECUTANDO A QUERY
        connection.query(sql, fields, function(err, rows) {
            if (err) throw err
            res.json(rows)
        })

        //FINALIZANDO A CONEXAO
        connection.end()
    }

    //CRIAR USUARIO
    api.UserNew = (req, res, next) => {
        //CONECTANDO AO BANCO DE DADOS
        var connection = app.database.mysql.ConnectionMysql()

        //DETEMINANDO A QUERY
        sql = `insert into user (
            id
            name,
            email,
            password,
            reset
        ) values (?, ?, ?, ?, ?, ?)`

        //DETERMINANDO PARAMENTROS
        fields = [
            req.body.id,
            req.body.name, 
            req.body.email,
            req.body.password,
            req.body.reset
        ]

        //EXECUTANDO A QUERY
        connection.query(sql, fields, function(err, rows) {
            if (err) throw err
            res.json(rows.affectedRows)
        })

        //FINALIZANDO A CONEXAO
        connection.end()
    }

    //ALTERAR USUARIO
    api.UserChange = (req, res, next) => {
        //CONECTANDO AO BANCO DE DADOS
        var connection = app.database.mysql.ConnectionMysql()

        //DETEMINANDO A QUERY
        sql = `update user set
            name        = ?,
            email       = ?,
            password    = ?,
            reset       = ?
        where id = ?`

        //DETERMINANDO PARAMENTROS
        fields = [
            req.params.name,
            req.params.email,
            req.params.password,
            req.params.reset,
            req.params.id
        ]

        //EXECUTANDO A QUERY
        connection.query(sql, fields, function(err, rows) {
            if (err) throw err
            res.json(rows.affectedRows)
        })

        //FINALIZANDO A CONEXAO
        connection.end()
    }

    //DELATAR USUARIO
    api.UserDelete = (req, res, next) => {
        //CONECTANDO AO BANCO DE DADOS
        var connection = app.database.mysql.ConnectionMysql()

        //DETEMINANDO A QUERY
        sql = `delete from user where id = ?`

        //DETERMINANDO PARAMENTROS
        fields = [req.params.id]

        //EXECUTANDO A QUERY
        connection.query(sql, fields, function(err, rows) {
            if (err) throw err
            res.json(rows.affectedRows)
        })

        //FINALIZANDO A CONEXAO
        connection.end()
    }

    return api
}
