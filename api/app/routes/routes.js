module.exports = app => {
    
    var users   = app.controllers.users
    
    app.route("/users")
        .get(users.UserAll)
        .post(users.UserNew)

    app.route("/users/:id")
        .get(users.UserFilter)
        .put(users.UserChange)
        .delete(users.UserDelete)

}
