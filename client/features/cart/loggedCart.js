import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartByUserIdAsync, fetchOrderProductsByOrderIdAsync } from './cartSlice';

const loggedCart = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.me.id);

    useEffect(() => {
        dispatch(fetchCartByUserIdAsync(userId));
        dispatch(fetchOrderProductsByOrderIdAsync(cartOrderId)) //array of objects
    }, [dispatch])

    const order = useSelector((state) =>
        state.user_cart.order)
    const cartOrderId = order.id; //id for the carted order

    const products = [];
    for(product of orderProducts){}

    const orderProducts = useSelector((state) => state.user_cart.orderProducts)

    console.log("orderProducts is ", orderProducts)

    //Tim, just need help over here to map over "orderProducts". Orderproducts is an array of objects, where the objects are the orders products. 

    return (
        <div className="cart__left">
            <div>
                <h3>My Cart</h3>

            </div>
        </div>
    );

}
