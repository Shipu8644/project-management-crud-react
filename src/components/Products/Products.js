import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleProductDelete = id => {
        fetch(`http://localhost:7000/products/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }
            })
    }

    return (
        <div>
            <h1>Number of products: {products.length} </h1>
            <ol>
                {
                    products.map(product => <li key={product._id}>
                        name={product.name}
                        <br />
                        price={product.price}
                        <br />
                        quantity={product.quantity}
                        <br />
                        <br />
                        <NavLink to={`/products/update/${product._id}`}>  <button>Update</button></NavLink>
                        <br />
                        <button onClick={() => handleProductDelete(product._id)}>Delete</button>
                        <br />
                        <br />
                    </li>)
                }

            </ol>
        </div>
    );
};

export default Products;