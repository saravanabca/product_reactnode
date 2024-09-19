import { query } from './db.js';

const Product = {
    getAllProducts: (callback) => {
        const sql = "SELECT * FROM products";
        query(sql, (err, result) => {
            if (err) callback(err, null);
            else callback(null, result);
        });
    }
};

export default Product;
