const bcr = require('bcrypt')


hashPassword = async(pass) => {
    try {
        const salt = bcr.genSalt(10)
        const result = bcr.hash(password, salt)
        return result

    } catch (error) {
        throw error
    }

}

module.exports = hashPassword