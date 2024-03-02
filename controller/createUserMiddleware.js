import Customer from "../models/product.js";

export const createUserMiddleware = async (req, res) => {
    const {name, age, location, gender, cell, email, status} = req.body;

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
        email,
        userPhoto,
        status,
    });

    res.status(201).json(data);
}


// get all user here
export const getUserMiddleware = async (req, res) => {
    const data = await Customer.find();
    console.log(data);
    res.status(200).json(data);
}


// get single product here now
export const getSinglePost = async (req, res) => {
    const { id } = req.params;
    const singleData = await Customer.findOne({_id: id});

    res.status(200).json(singleData);
}

// get single product here now
export const deleteSinglePost = async (req, res) => {
    const { id } = req.params;
    const deleteData = await Customer.deleteOne({_id: id});

    res.status(200).json(deleteData);
}