const redis = require('redis')

class redis {
        constructor () {
            this.redisdb = redis.createClient({
            host : process.env.REDIS_HOST,
            port : process.env.REDIS_PORT,
        })
    }

    redisCheck () {
        return new Promise((resolve, reject) => {
            this.redisdb.get("")
        })
    }

}