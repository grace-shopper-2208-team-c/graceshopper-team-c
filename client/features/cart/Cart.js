import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem2'
import { fetchCartByUserIdAsync, fetchOrderProductsByOrderIdAsync } from './cartSlice';
import { allProducts, fetchProducts } from '../products/productsSlice';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Cart = () => {

}


const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(allProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const guestCart = JSON.parse(localStorage.getItem('cart'));
  const cart = useSelector((state) => state.cart);
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

    const product = useSelector((state) => state.user_cart.product)

    console.log('Product', product)



    //added template to show products in cart
    return (
      <div className="cart__left">
        <div>
          <h3>My Cart</h3>

        </div>
      </div>
    );

  } else if (!isLoggedIn) {
    // logic for guest cart
    // map the cart items from localstorage
    // get product info from the product ID
    let subTotal = 0;
    const addTotal = (p) => {
      subTotal = subTotal + p;
    };

    const ordersMap = guestCart.map((guestCartItem) => {
      console.log(guestCartItem.productId);

      let singleProduct = (val) => {
        console.log(val);
        for (let i = 0; i < products.length; i++) {
          if (products[i].id == guestCartItem.productId) {
            if (val === 'name') {
              return products[i].name;
            }
            if (val === 'image') {
              return products[i].image;
            }
          }
        }
      };

      return (
        <div className="guestCartItem">
          {addTotal(guestCartItem.price * guestCartItem.quantity)}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              '& > :not(style)': {
                m: 1,
                width: '95%',
                padding: 3,
              },
            }}
          >
            <Paper elevation={3}>
              <img src={singleProduct('image')}></img>
              <p>{singleProduct('name')}</p>
              <p>Quantity: {guestCartItem.quantity}</p>
              <p>Price: ${guestCartItem.price}</p>
            </Paper>
          </Box>
        </div>
      );
    });

    return (
      <div className="guestCartHolder">
        <h1 align="center">Cart</h1>
        {ordersMap}
        <div className="guestCartButtons">
          <h2 style={{ marginLeft: '10px' }}>
            Subtotal: ${subTotal.toFixed(2)}
            <Button variant="outlined" size="medium" sx={{ m: 2 }}>
              Checkout as Guest
            </Button>
            <Button variant="outlined" size="medium">
              Keep Shopping
            </Button>
          </h2>
        </div>
      </div>
    );
  }
};

export default Cart;
