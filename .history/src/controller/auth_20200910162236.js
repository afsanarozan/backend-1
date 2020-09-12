const model = require("../model/user")
const respon = require("../helper/respon")
const bcr = require("bcrypt")

class Auth {
     async login(req, res){
        try {
            const passDB = await model.getByUser(req.body.name)
            const passReq  = req.body.password
            
            if (passDB <= 0 ){
                return respon(res, 200, "Username tidak Ada")
            }
            
            const check = await bcr.compare(passReq, passDB[0].password)

            if(check) {
                respon(res, 200,"Berhasil Login")
            } else {
                respon(res, 200, "gagal Login")
            }

        } catch (error) {
            respon(res, 500, error)
        }
        
    }

    setToken = async user=> {
     const payload = {
         user : this.user
     }
 }}

module.exports = new Auth()