import multer from "multer";

// create multer file system management
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
    },
    filename: (req, file, cb) => {
        cb(null, "public");
    }
});

// init file router here
export const indexCreateFileUpload = multer({storage}).single('productPhotos');