import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  //const name = useSelector((state) => state.auth.me.name);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  return (
    <div>
      <h2>Here is the cart placholder.</h2>
    </div>
  );
};

export default Cart;
