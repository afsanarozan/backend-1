const model = require('../model/user')
const user = {}

user.Get = async (req, res) => {
    try {
        const data = await model.Get()
        return res.status(200)
    } catch (error) {
        
    }
}