import express from "express";
import { createProduct, getAllProduct } from "../controller/createProductController.js";

// init express js router
const router = express.Router();


// product router creation
router.get("/product", getAllProduct );

router.post("/product", createProduct);

// export express router
export default router;
