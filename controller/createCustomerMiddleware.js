import CustomerData from "../models/customer.js";

export const createCustomerMiddleware = async (req, res) => {
    const {name, age, location, gender, cell, email, status} = req.body;

     // file manage here
     let customerPhoto = null;

     if(req.file.filename){
        customerPhoto = req.file.filename;
     }

    const customerData = await CustomerData.create({
        name,
        age,
        location,
        gender,
        cell,
        email,
        customerPhoto,
        status,
    });


    res.status(201).json(customerData);
}


// get all Customer data here
export const getAllCustomer = async (req, res) => {
    const getAllData = await CustomerData.find();

    res.status(200).json(getAllData);
}

// get all Customer data here
export const getSingleCustomer = async (req, res) => {

    // get params data here
    const { id }       = req.params;

    const getSingleData = await CustomerData.findOne({_id: id});

    res.status(200).json(getSingleData);
}


// get all Customer data here
export const deleteSingleCustomer = async (req, res) => {

    // get params data here
    const { id }       = req.params;

    const deleteSingleData = await CustomerData.deleteOne({_id: id});

    res.status(200).json(deleteSingleData);
}