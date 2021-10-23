import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:7000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    return (
        <div>
            <h1>Product Name: {product.name}</h1>
            <p><small>Id: {product._id}</small></p>
        </div>
    );
};

export default UpdateProduct;