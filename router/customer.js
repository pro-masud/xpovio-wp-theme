import express from "express";
import { createCustomerMiddleware, getAllCustomer, getSingleCustomer } from "../controller/createCustomerMiddleware.js";
import { customerImageFileUpload } from "../util/multer.js";


// init express js router here
const router = express.Router();


// create a post router here
router.post('/customer', customerImageFileUpload, createCustomerMiddleware);
router.get("/customer", getAllCustomer);
router.get("/customer/:id", getSingleCustomer);



// export defaul router there
export default router;