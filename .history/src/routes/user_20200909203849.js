const express = require("express")
const controller = require('../controller/user')
const routes = express.Router()

routes.get('/', controller.Get)
routes.post('/', controller.Add)
routes.u('/', controller.Edit)
routes.get('/', controller.Delete)

module.exports = routes