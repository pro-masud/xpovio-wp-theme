export const getAllProduct = (req, res) => {
    res.status(200).json({message: "Get Product All Data"});
}

export const createProduct = (req, res) => {
    res.status(201).json({message: "create Product Data"});
}