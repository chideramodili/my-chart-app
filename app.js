const express = require ( 'express')
const app = express()
const middleware = require("./middlewares/index.middlewware")

middleware(app)




exports.app = app




const PORT = 3000

app.listen(PORT, () => console.log("server listening on port 3000"))
