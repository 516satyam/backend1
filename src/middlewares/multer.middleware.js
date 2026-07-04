import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb){
    cb(null, file.originalname)
    // using originalname may overwrite the other file with the same name but it will be on our server for fraction of a second before uploading it on cloud service; so we can afford to do this
  }
})

export const upload = multer({
    storage, })