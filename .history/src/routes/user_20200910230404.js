const express = require("express")
const controller = require('../controller/user')
const routes = express.Router()
const validate = require('../middleware/validate')

routes.get('/', controller.getAll)
routes.get('/', controller.getByUser)
routes.post('/', validate,controller.Add)
routes.put('/', validate,controller.Edit)
routes.delete('/', validatecontroller.Delete)

module.exports = routes
