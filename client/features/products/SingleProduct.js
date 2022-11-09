// import React, { useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProductByIdAsync, showSingleProduct } from '../reducers/singleProductSlice';


const SingleProduct = () => {
    const { id } = useParams();

    const product = useSelector();

    const dispatch = useDispatch();


    useEffect(() => {
        console.log('fetching project');
        dispatch();
    }, []);

    return (
        <div className='single-product'>
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <h3>{product.quantity}</h3>
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
        </div>
    );
};

export default SingleProduct;