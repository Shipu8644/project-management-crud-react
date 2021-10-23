import React, { useRef } from 'react';

const AddProduct = () => {
    const nameRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');

    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;

        const newProduct = { name, price, quantity };

        fetch('http://localhost:7000/products', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added the user');
                    e.target.reset();
                }
            })

    }

    return (
        <div>
            <h1>You can add a product here</h1>
            <form onSubmit={handleAddProduct}>
                <input style={{ fontSize: '20px' }} ref={nameRef} type="text" placeholder='name' />
                <br />
                <br />
                <input style={{ fontSize: '20px' }} ref={priceRef} type="text" placeholder='price' />
                <br />
                <br />
                <input style={{ fontSize: '20px' }} ref={quantityRef} type="text" placeholder='quantity' />
                <br />
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddProduct;