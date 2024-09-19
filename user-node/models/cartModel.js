import { query } from './db.js'; 

export const addToCart = (product_id, name, description, price, image, quantity, callback) => {
    const sql = `INSERT INTO cart (product_id, name, description, price, image, quantity) VALUES (?, ?, ?, ?, ?, ?)`;

    console.log('Executing SQL:', sql, [product_id, name, description, price, image, quantity]);

    query(sql, [product_id, name, description, price, image, quantity], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return callback(err);
        }

        console.log('Query result:', result);
        callback(null, result);
    });
};


export const getCartItems = (callback) => {
    const sql = "SELECT * FROM cart";
    query(sql, (err, items) => {
        if (err) return callback(err, null);
        callback(null, items);
    });
};

export const removeFromCart = (id, callback) => {
    const sql = "DELETE FROM cart WHERE id = ?";
    query(sql, [id], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};
