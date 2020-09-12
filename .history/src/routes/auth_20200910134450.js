const express = require("express")
const controller = require('../controller/auth')
const routes = express.Router()

routes.post('/', controller.Add)
routes.put('/',controller.Edit)
routes.delete('/',controller.Delete)

module.exports = routes