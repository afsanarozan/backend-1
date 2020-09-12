const express = require("express")
const controller = require('../controller/user')
const routes = express.Router()

routes.get('/', controller.Get)
routes.post('/', controller.Add)
routes.put('/',controller.Edit)
routes.put('/',controller.Delete)

module.exports = routes
