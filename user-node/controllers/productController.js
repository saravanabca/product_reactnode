import Product from '../models/productModel.js';

export const getAllProducts = (req, res) => {
    Product.getAllProducts((err, products) => {
        if (err) return res.status(500).send(err);
        res.json(products);
    });
};
