import express from "express";
import { createIndexPage } from "../controller/createIndexPage.js";
import { indexCreateFileUpload } from "../util/multer.js";

// init express js router here
const router = express.Router();


router.post("/", indexCreateFileUpload, createIndexPage);



// export default import here
export default router;