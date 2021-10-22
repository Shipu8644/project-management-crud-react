import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
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
                        <button>Update</button>
                        <br />
                        <button>Delete</button>
                        <br />
                        <br />
                    </li>)
                }

            </ol>
        </div>
    );
};

export default Products;