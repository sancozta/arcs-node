const express       = require("express")
const path          = require("path")
const logger        = require("morgan")
const cookieParser  = require("cookie-parser")
const bodyParser    = require("body-parser")
const helmet        = require("helmet")
const compression   = require("compression")
const consign       = require("consign")

require("dotenv").config()

// CONFIG STRUCTURE
const app = express()
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.disable("x-powered-by")
app.use(compression())
app.use(helmet())

// METHOD FOR CORS
app.use("/", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin)
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Cache-Control, Origin, Content-Type, Authorization, Content-Length, X-Requested-With")
    res.header("Access-Control-Allow-Credentials", true)
    if (req.method == "OPTIONS") {
        res.send(200)
    } else {
        next()
    }
})

// MVC DYNAMIC
consign({cwd: "app"})
    .include("database")
    .include("models")
    .then("controllers")
    .then("routes")
    .into(app)

// CATCH 404 AND FORWARD TO ERROR HANDLER
app.use((req, res, next) => {
    var err = new Error("Not Found")
    err.status = 404
    next(err)
})

// ERROS IN PRODUCTION 
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        status: "Error",
        message: err.message,
        error: {}
    })
})

// ERROS IN DEVELOP
if (app.get("ENV") === "development") {
    app.use((err, req, res, next) => {
        res.status(err.status || 500)
        res.json({
            status: "Error",
            message: err.message,
            error: err
        })
    })
}

// SET IN THE PORT
app.set("port", process.env.PORT || 3000)

// EXECUTION SERVER
var server = app.listen(app.get("port"), () => {
    console.log("Executando na porta " + server.address().port)
})
