import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/product.css'
const ProductListing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => setProducts(response.data))
            .catch(error => console.log('Error fetching products:', error));
    }, []);

    const addToCart = (product) => {
        axios.post('http://localhost:5000/cart', {
            product_id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
            quantity: 1
        })
        .then(response => console.log(response.data.message))
        .catch(error => console.log('Error adding to cart:', error));
    };

    return (
        <div className="container my-5">
            <div className="row">
                {products.map((product, index) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card shadow-sm">
                            <img 
                                src={`http://localhost/admin/public/${product.image}`} 
                                className="card-img-top image-size" 
                                alt={product.name} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">Price: <strong>${product.price.toFixed(2)}</strong></p>
                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
