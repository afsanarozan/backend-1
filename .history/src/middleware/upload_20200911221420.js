const multer = require('multer ')

const storage = multer.diskStorage({
    destination : 'public/upload'
    filename : (req , file, cb) => {
        cb(null, new Date().toISOString() + "-" + file.originalname)
    } 
})

const filter = (req, file, cb) => {

}

const upload = multer({

})

module.exports = upload