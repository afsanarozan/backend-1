const model = require('../model/product')
const respon = require('../helper/respon')
const redis = require('../config/redis')
const product = {}

product.All = async (req, res) => {
    try {
        const data = await model.GetAll()
        const data_redis = JSON.stringify(data)
        redis.redisdb.setex("product", 30, data_redis)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

product.show = async (req, res) => {
    try {
        const id = req.params.id
        console.log(req.params.id)
        const data = await model.get(id)
        const data_redis = JSON.stringify(data)
        redis.redisdb.setex("product", 30, data_redis)
        return res.status(200).json(data)
    } catch (error) {
        return respon(res, 500, 'Error', error)
    }
}


product.lastupdate = async(req, res) => {
    try {
        const data = await model.Lupdate()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

product.name = async(req, res) => {
    try {
        const data = await model.Name()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

product.price = async(req, res) => {
    try {
        const data = await model.Price()   
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
}

product.Add = async(req, res) => {
    try {
        if (req.file === undefined){
            console.log(req.file)
            return res.status(500).json("Data Kosong")
        }  
        const datas = {
            name: req.body.name,
            price : req.body.price,
            image: req.file.path,
        }
        console.log(datas)
        const data = await model.Add(datas)
        return respon(res, 201, datas)
    } catch (error) {
        return res.status(500).json("terjadi Error")
    }
} 


product.Edit= async (req, res) => {
    try {
        const datas = {
            id: req.body.id,
            name: req.body.name,
            price : req.body.price,
            image: req.file.path,
        }  
        const data = await model.Edit(datas)
        return respon(res, 201, datas)
    } catch {
        return res.status(500).json("terjadi Error")
    }
} 

product.Delete= async (req, res) => {
    try {
        const id = req.params.id
        const data = model.Delete(id)   
        return res.status(200).json(data)
    } catch {
        return res.status(500).json("terjadi Error")
    }
}

product.search = async (req, res) => {
    try {
        const name = req.query.name
        const data = await model.Get(name)
        if(data == ''){
        return res.status(200).json('Data Tidak Ada')
    } else {
        return res.status(200).json(data)
    }
    } catch (error) {
        return res.status(500).json("Error")
        
    }
}




module.exports = product