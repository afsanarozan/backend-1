const multer = require('multer ')

const storage = multer.diskStorage({
    destination : 'public/upload'
    filename : (req , file, cb) => {
        cb(null, file.fieldname + new Date().toISOString() + file.originaln)
    } 
})

const upload = multer({

})

module.exports = upload