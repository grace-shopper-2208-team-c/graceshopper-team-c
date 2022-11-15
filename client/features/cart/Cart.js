import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SingleCartItem from './SingleCartItem'


const Cart = () => {

  const guestCart = JSON.parse(localStorage.getItem('cart'));
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  if (isLoggedIn) {
    //logic for logged in user
    return (
      <>
      </>
    )
  }
  else if (!isLoggedIn) {
    // logic for guest cart
    // map the cart items from localstorage
    // get product info from the product ID
    let subTotal = 0;
    const addTotal = (p) => {
      subTotal = subTotal + p
    }

   let ordersMap = guestCart.map((guestCartItem) => (
      <div className='guestCartItem'>
      {addTotal(guestCartItem.price)}

        <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: "center",
      alignItems: "center",
      '& > :not(style)': {
        m: 1,
        width: '95%',
        padding: 3,
      },
    }}
  >
    <Paper elevation={3}>
      <SingleCartItem props={guestCartItem.productId} /> 
      </Paper>
  </Box>
  </div>
    ));
  
    return (
      <div className="guestCartHolder">
        <h1 align="center">Cart</h1>
        {ordersMap}
        <div className="guestCartButtons">
        <h2 style={{marginLeft: "10px"}}>Subtotal: ${subTotal.toFixed(2)}
          <Button
            variant="outlined"
            size="medium"
            sx={{m:2}}
          >Checkout as Guest</Button>
          <Button
            variant="outlined"
            size="medium"
          >Keep Shopping</Button>
          </h2>
        </div>
      </div>

    )
  }
};

// From previous cart - save for the loggedin cart logic
//   return (
// <div className="cart__left">
//   <div>
//     <h3>My Cart</h3>
//     {/* {cart?.map((product) => (
//       <CartProduct
//         key={product.id}
//         id={product.id}
//         image={product.image}
//         price={item.price} 
//         quantity={product.quantity}
//       />
//     ))} */}
//   </div>
// </div>
//   );



export default Cart
