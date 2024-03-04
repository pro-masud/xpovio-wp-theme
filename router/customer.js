import express from "express";
import { createCustomerMiddleware, getAllCustomer, getSingleCustomer, deleteSingleCustomer } from "../controller/createCustomerMiddleware.js";
import { customerImageFileUpload } from "../util/multer.js";


// init express js router here
const router = express.Router();


// create a post router here
router.post('/customer', customerImageFileUpload, createCustomerMiddleware);
router.get("/customer", getAllCustomer);
router.get("/customer/:id", getSingleCustomer);
router.delete("/customer/:id", deleteSingleCustomer);



// export defaul router there
export default router;