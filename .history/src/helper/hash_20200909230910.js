const bcr = require('bcrypt')


hashPassword = (pass) => {
    try {
        const salt = bcr.genSalt(10)
        const result = bcr.hash(password, salt)


    } catch (error) {
        throw error
    }

}

module.exports = hashPassword