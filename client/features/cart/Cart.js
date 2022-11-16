import React from 'react';
import { useSelector} from 'react-redux';
// add your logged in user cart here
import GuestCart from './GuestCart';
import loggedCart from './loggedCart';

const Cart = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  
  if (isLoggedIn) {
    //return logged in user cart below
    return (
      <loggedCart></loggedCart>
    )
  }
  else if (!isLoggedIn) {
    return (
    <GuestCart />
    )
  }
};

export default Cart
