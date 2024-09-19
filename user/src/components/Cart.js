import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/cart')
            .then(response => setCartItems(response.data))
            .catch(error => console.log(error));
    }, []);

    const removeFromCart = (productId) => {
        axios.delete(`http://localhost:5000/cart/${productId}`)
            .then(response => {
                console.log(response.data.message);
                setCartItems(cartItems.filter(item => item.id !== productId));
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>    
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price}</td>
                                <td>${item.price * item.quantity}</td>
                                <td>
                                    <img src={`http://localhost/admin/public//${item.image}`} alt={item.name} width="50" />
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Cart;
