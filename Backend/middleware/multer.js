// import multer from "multer"  

// const storage = multer.diskStorage({
//     filename:function(req, file, callback){
//         callback(null, req.originalname)
//     }
// })

// const upload = multer({storage})

// export default upload

import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join("uploads/")); // or give full path if needed
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname); // or generate unique filename
  }
});

const upload = multer({ storage });
export default upload;
