import fs from "fs";
import { createProductSlug, generateMongoId } from "../helper/helper.js";
export const getAllProduct = (req, res) => {

    // create json db database within product data
    const prodateData = JSON.parse(fs.readFileSync("db/product.json").toString());

    if(prodateData.length === 0){
        res.status(400).json({message: "Product Not Found !!!"});
        return;
    }
    res.status(200).json(prodateData);
}




export const getSingleProduct = (req, res) => {
    const { slug } = req.params;
    console.log(slug);

    // create json db database within product data
    const prodateData = JSON.parse(fs.readFileSync("db/product.json").toString());

    const singleData = prodateData.find((data) => data.slug === slug);

    res.status(400).json(singleData);
}



export const createProduct = (req, res) => {
    const {name, regularPrice, selaPrice, stock, productPhoto} = req.body;


    // create json db database within product data
    const prodateData = JSON.parse(fs.readFileSync("db/product.json").toString());


    // checked Slug 
    if(prodateData.some(data => data.slug === createProductSlug(name))){
        res.status(400).json({message: "All Ready This slug Database"});
        return;
    }

    // create product data structure
    const productSingleData = {
        id: generateMongoId(),
        name,
        slug: createProductSlug(name),
        regularPrice,
        selaPrice,
        stock,
        productPhoto: req.file.filename
    }


    // single product data push data base
    prodateData.push(productSingleData);


    fs.writeFileSync("db/product.json", JSON.stringify(prodateData));

    res.status(201).json({
            prodateData,
            message: "Single Product Data Creation Successfully Complete"
        });
}