const Pool = require('pg-pool')

const db = new Pool({
    user : procc,
    database : "mydb",
    password : "hahaha321",
    host : "localhost"
})

module.exports = db