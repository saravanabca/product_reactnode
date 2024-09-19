import { query } from './db.js'; // Correctly importing the named export 'query'

// Add an item to the cart
export const addToCart = (product_id, name, description, price, image, quantity, callback) => {
    const sql = `INSERT INTO cart (product_id, name, description, price, image, quantity) VALUES (?, ?, ?, ?, ?, ?)`;
    query(sql, [product_id, name, description, price, image, quantity], callback);
};

// Get all items from the cart
export const getCartItems = (callback) => {
    const sql = "SELECT * FROM cart";
    query(sql, (err, items) => {
        if (err) return callback(err, null);
        callback(null, items);
    });
};

// Remove an item from the cart
export const removeFromCart = (id, callback) => {
    const sql = "DELETE FROM cart WHERE id = ?";
    query(sql, [id], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};
