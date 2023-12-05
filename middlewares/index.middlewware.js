const express = require ('express' )
const app = express()
const body_parser = require("body-parser")
const config = require("../config/index.config")
const users = require("../router/user")

module.exports = app => {
    app.use(body_parser.json())
    app.use("/users", users)
    config
}