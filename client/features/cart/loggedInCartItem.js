import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from  "react-router-dom";
import {fetchProduct} from './cartSlice'

/**
 * Presents cart item for specific product
 * @param {integer} id 
 */
const cartItem = ({id}) => {
    const dispatch = useDispatch()

    async function getProduct(){
        dispatch(fetchProduct(id));
    }

    const product = useSelector((state) => state.user_cart.product)
    
    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    )
}

export default cartItem;