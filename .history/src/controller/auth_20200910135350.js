const model = require("../model/user")
const respon = require("../helper/respon")

class Auth {
    async Login  (req, res){
        const name = model.getNyUser(req.body.name)       
    }
}