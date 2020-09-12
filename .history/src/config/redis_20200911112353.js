const redis = require('redis')
const respon = require('../helper/respon')

class Redis{
        constructor() {
            this.redisdb = redis.createClient({
                host : process.env.REDIS_HOST,
                port : process.env.REDIS_PORT,
        })
    }

    redisCheck() {
        return new Promise((resolve, reject) => {
            this.redisdb.get("product", (err, res) => {
                if (err) {
                    reject("Redis Not Connect")
                }
                if(res == 'null' || res == "OK"){
                    resolve("Redis Connected")
                }
            })
        })
    }

}

module.exports = new Redis()