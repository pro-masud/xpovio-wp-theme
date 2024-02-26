import express from "express";
import { createProduct, deleteSingleProduct, getAllProduct, getSingleProduct } from "../controller/createProductController.js";
import { productImageFileUpload } from "../util/multer.js";

// init express js router
const router = express.Router();



router.get("/", (req, res) => {
    res.render("view");
});

router.get("/single/:slug", (req, res) => {
    res.render("single");
});


router.get("/create", (req, res) => {
    res.render("create");
});

router.post("/create", (req, res) => {
    res.render("create");
});

router.get("/product/:slug", getSingleProduct);
router.delete("/product/:id", deleteSingleProduct);
router.post("/product", productImageFileUpload, createProduct);

// export express router
export default router;
