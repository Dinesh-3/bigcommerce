
const multer = require('multer')

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
      cb(null,file.originalname);
    }
  });

// Init Upload
const upload = multer({
    storage: storage,
    // limits:{fileSize: 1000000},
    // fileFilter: function(req, file, cb){
    //   checkFileType(file, cb);
    // }
  }).single('image');


module.exports = upload;  