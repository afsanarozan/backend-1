const database = require('../config/databases')
const user = {}

user.Get = () => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT * FROM login`)
        .then(res => {
            resolve(res.rows)
        })
        .catch(err => {
            reject(err)
        })
    })
}

user.Add = (name, password, token) => {
    return new Promise((reslove, reject) => {
        database.query(`INSERT INTO login (name,password,token) VALUES ('${name}','${password}', '${token}')`)
        .then(res => {
            resolve(res)
        })
        .
    })
}

module.exports = user