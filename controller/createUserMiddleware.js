import Customer from "../models/product.js";

export const createUserMiddleware = async (req, res) => {
    const {name, age, location, gender, cell, status} = req.body;

    // file manage here
    let userPhoto = null;

    if(req.file.filename){
        userPhoto = req.file.filename;
    }
    const data = await Customer.create({
        name,
        age,
        location,
        gender,
        cell,
        userPhoto,
        status,
    });

    res.status(201).json(data);
}