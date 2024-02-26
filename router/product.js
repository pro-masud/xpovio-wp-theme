import express from "express";
import { createProduct, getAllProduct, getSingleProduct } from "../controller/createProductController.js";
import { productImageFileUpload } from "../util/multer.js";

// init express js router
const router = express.Router();


// product router creation
router.get("/product", getAllProduct );

router.get("/product/:slug", getSingleProduct);
router.post("/product", productImageFileUpload, createProduct);

// export express router
export default router;
