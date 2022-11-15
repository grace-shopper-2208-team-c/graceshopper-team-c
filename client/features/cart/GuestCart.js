import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allProducts, fetchProducts } from '../products/productsSlice'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const GuestCart = () => {

    const dispatch = useDispatch();
    const products = useSelector(allProducts);
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    const guestCart = JSON.parse(localStorage.getItem('cart')) || ['No Cart'];
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
      
      // get the subtotal
      let subTotal = 0;
      const addTotal = (p) => {
        subTotal = subTotal + p
      }
  
      let incQuantity = (id) => {
        console.log(guestCart[id])        
        guestCart[id].quantity++
        console.log(guestCart[id]) 
        localStorage.setItem('cart', JSON.stringify(guestCart));
      }
  
      const decQuantity = (id) => {
  
      }
  
      const ordersMap = guestCart.map((guestCartItem) => {
  
        // check to see if there is a local storage cart. if not, return message letting user know cart is empty
        if (guestCartItem == 'No Cart'){
          return (
            <h3 style={{marginLeft: "10px"}}>Shopping cart is empty.</h3>
          )
        }
        else { 
        
        // Function to take the guest cart item's product id and find the actual product for display information
        let singleProduct = (val) => {
          for (let i = 0; i < products.length; i++){
            if (products[i].id == guestCartItem.productId){
              if (val === 'name'){
                return products[i].name
              }
              if (val === 'image'){
                return products[i].image
              }
            }
          }
        }
  
        return (
        <div className='guestCartItem'>
          {/* Get the subtotal */}
        {addTotal(guestCartItem.price * guestCartItem.quantity)}
          
          {/* Each individual cart item */}
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
        <img src={singleProduct('image')} className="cartImage"></img>
          <h3>{singleProduct('name')}</h3>
          <p>Quantity: <button onClick={ () => incQuantity(guestCartItem.productId)}>+</button> {guestCartItem.quantity} <button onClick={ () => incQuantity(guestCartItem.productId)}>-</button></p>
          <p>Price: ${guestCartItem.price}</p>
        </Paper>
    </Box>
    </div>
        
    )}});
  
      return (
        <div className="guestCartHolder">
           <hr />
          <h1 align="center">Cart</h1>
          <hr />
          {ordersMap}
          <hr />
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
  
  export default GuestCart
  