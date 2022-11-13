import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  //const name = useSelector((state) => state.auth.me.name);

  //added cart const
  const cart = useSelector((state) => state.cart);

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  //added template to show products in cart
  return (
<div className="cart__left">
  <div>
    <h3>My Cart</h3>
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
