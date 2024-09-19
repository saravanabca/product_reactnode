import Product from '../models/productModel.js';

// Controller to get all products
export const getAllProducts = (req, res) => {
    Product.getAllProducts((err, products) => {
        if (err) return res.status(500).send(err);
        res.json(products);
    });
};
