import express from "express";
import { createCustomerMiddleware, getAllCustomer } from "../controller/createCustomerMiddleware.js";
import { customerImageFileUpload } from "../util/multer.js";


// init express js router here
const router = express.Router();


// create a post router here
router.post('/customer', customerImageFileUpload, createCustomerMiddleware);
router.get("/customer", getAllCustomer);



// export defaul router there
export default router;