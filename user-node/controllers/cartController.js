import { addToCart as _addToCart, getCartItems as _getCartItems, removeFromCart as _removeFromCart } from '../models/cartModel.js';

export const addToCart = (req, res) => {
    const { product_id, name, description, price, image, quantity } = req.body;

    console.log('Received Add to Cart Request:', req.body);

    _addToCart(product_id, name, description, price, image, quantity, (err, result) => {
        if (err) {
            console.error('Error adding product to cart:', err);
            return res.status(500).json({ message: 'Error adding product to cart', error: err });
        }

        console.log('Product added to cart successfully');
        res.status(200).json({ message: 'Product added to cart successfully' });
    });
};



export const getCartItems = (req, res) => {
    _getCartItems((err, items) => {
        if (err) return res.status(500).send(err);
        res.send(items);
    });
};

export const removeFromCart = (req, res) => {
    const productId = req.params.id;
    console.log(productId);
    if (!productId) {
        return res.status(400).json({ message: 'Product ID is required' });
    }

    _removeFromCart(productId, (err, result) => {
        if (err) {
            console.error('Error removing product from cart:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Removed from cart' });
        } else {
            res.status(404).json({ message: 'Product not found in cart' });
        }
    });
};

