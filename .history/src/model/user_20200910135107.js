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

user.getByUser = (name) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT * FROM login WHERE name = '${name}'`)
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

user.Add = (data) => {
    return new Promise((resolve, reject) => {
        database.query(`INSERT INTO login (name, password) VALUES ('${data.name}','${data.password}')`)                                                            password}')`)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}

user.Edit = (id, name, password, token) => {
    return new Promise((resolve, reject) => {
        database.query(`UPDATE login SET name='${name}', password='${password}', token='${token}' WHERE id=${id} `)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}

user.Delete = (id) => {
    return new Promise((resolve, reject) => {
        database.query(`DELETE FROM login WHERE id=${id} `)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}

module.exports = user