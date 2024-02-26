import express from "express";
import { createProduct, deleteSingleProduct, getAllProduct, getSingleProduct, showCreatePage, showProductPage, showSinglePage } from "../controller/createProductController.js";
import { productImageFileUpload } from "../util/multer.js";

// init express js router
const router = express.Router();



router.get("/", showProductPage);

router.get("/single/:slug", showSinglePage);


router.get("/create", showCreatePage);

router.get("/product/:slug", getSingleProduct);
router.delete("/product/:id", deleteSingleProduct);
router.post("/product", productImageFileUpload, createProduct);

// export express router
export default router;
