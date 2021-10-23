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

    const handleNameChange = (e) => {
        const updateName = e.target.value;
        const UpdateProduct = { ...product };
        UpdateProduct.name = updateName;
        setProduct(UpdateProduct);
    }
    const handlePriceChange = (e) => {
        const updatePrice = e.target.value;
        const UpdateProduct = { ...product };
        UpdateProduct.price = updatePrice;
        setProduct(UpdateProduct);
    }

    const handleQuantityChange = e => {
        const updateQuantity = e.target.value;
        const UpdateProduct = { ...product };
        UpdateProduct.quantity = updateQuantity;
        setProduct(UpdateProduct);
    }

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        fetch(`http://localhost:7000/products/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Update Successful");
                    setProduct({});
                }
            })
    }


    return (
        <div>
            <h1>Product u can update: {product.name}</h1>
            <p><small>Id: {product._id}</small></p>
            <br />
            <form onSubmit={handleUpdateProduct}>
                <h6>Name:</h6>
                <input type="text" onChange={handleNameChange} value={product.name || ''} />
                <h6>Price:</h6>
                <input type="text" onChange={handlePriceChange} value={product.price || ''} />
                <h6>Quantity:</h6>
                <input type="text" onChange={handleQuantityChange} value={product.quantity || ''} />
                <br />
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default UpdateProduct;