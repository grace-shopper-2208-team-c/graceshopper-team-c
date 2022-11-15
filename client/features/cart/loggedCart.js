import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartByUserIdAsync, fetchOrderProductsByOrderIdAsync } from './cartSlice';

const userId = useSelector((state) => state.auth.me.id)

const loggedCart = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  
    if (isLoggedIn) { //logic for logged in user
      const userId = useSelector((state) => state.auth.me.id);
  
      useEffect(() => {
        dispatch(fetchCartByUserIdAsync(userId));
        dispatch(fetchOrderProductsByOrderIdAsync(cartOrderId)) //array of objects
      }, [dispatch])
  
      const order = useSelector((state) =>
        state.user_cart.order)
      const cartOrderId = order.id; //id for the carted order
  
      const orderProducts = useSelector((state) => state.user_cart.orderProducts)
  
      console.log("orderProducts is ", orderProducts)
  
      // const product = useSelector((state) => state.user_cart.product)
  
      // console.log('Product', product)
  
  
  
      //added template to show products in cart
      return (
        <div className="cart__left">
          <div>
            <h3>My Cart</h3>
  
          </div>
        </div>
      );
  
    }
}