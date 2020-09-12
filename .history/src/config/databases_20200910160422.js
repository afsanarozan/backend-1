const Pool = require('pg-pool')

const db = new Pool({
    user : process.env.DB_USER,
    database : process.env.DB_DATABASE,
    password :process.env.DB_PASSWORD,
    host : "localhost"
})

module.exports = db