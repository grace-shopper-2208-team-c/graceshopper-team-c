
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdAsync, showSingleProduct } from '../products/singleProductSlice';

const SingleCartItem = ({ props }) => {

    console.log(props)
    const product = useSelector(showSingleProduct);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductByIdAsync(props));
    }, []);

    console.log(product)
    return (
        <>
            <p>{product.name}</p>
            <p></p>

        </>
    )
}

export default SingleCartItem