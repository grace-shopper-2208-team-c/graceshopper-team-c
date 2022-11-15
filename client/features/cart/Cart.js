import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem2'
import { fetchCartByUserIdAsync, fetchOrderProductsByOrderIdAsync } from './cartSlice';

const Cart = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userId = useSelector((state) => state.auth.me.id);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCartByUserIdAsync(userId));
    dispatch(fetchOrderProductsByOrderIdAsync(cartOrderId)) //array of objects
  }, [dispatch])

  const order = useSelector((state) => 
  state.user_cart.order)
  const cartOrderId = order.id; //id for the carted order

  const orderProducts = useSelector((state) => state.user_cart.orderProducts)

  console.log("orderProducts is ", orderProducts)

  const product = useSelector((state) => state.user_cart.product)

  console.log('Product', product)

  

  //added template to show products in cart
  return (
<div className="cart__left">
  <div>
    <h3>My Cart</h3>
    {/* <CartItem id={"1"}></CartItem> */}
    
    {/* {cart?.map((product) => (
      <CartProduct
        key={product.id}
        id={product.id}
        image={product.image}
        price={item.price} 
        quantity={product.quantity}
      />
    ))} */}
  </div>
</div>
  );
};

export default Cart;
