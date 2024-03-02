import express from "express";
import { createUserMiddleware, deleteSinglePost, getSinglePost, getUserMiddleware } from "../controller/createUserMiddleware.js";
import { userImageFileUpload } from "../util/multer.js";



// init express router here
const router = express.Router();

router.post("/user", userImageFileUpload, createUserMiddleware);
router.get("/user", getUserMiddleware);
router.get("/user/:id", getSinglePost);
router.delete("/user/:id", deleteSinglePost);

// export default router
export default router;