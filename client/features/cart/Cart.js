import React from 'react';
import { useSelector} from 'react-redux';
// add your logged in user cart here
import GuestCart from './GuestCart';

const Cart = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  
  if (isLoggedIn) {
    //return logged in user cart below
    return (
      <>

      </>
    )
  }
  else if (!isLoggedIn) {
    return (
    <GuestCart />
    )
  }
};

export default Cart
