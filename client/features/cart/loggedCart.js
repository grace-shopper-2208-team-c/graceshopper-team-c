import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCartByUserIdAsync,
  fetchOrderProductsByOrderIdAsync,
  CartByUserId,
  OrderProducts,
} from './cartSlice';
import { Link } from 'react-router-dom';
import { allProducts, fetchProducts } from '../products/productsSlice';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoggedCart = () => {
  async function deleteItem(pid) {
    try {
      await axios.delete(`/api/orders/cartProducts/${cartOrderId}/${pid}`);
      console.log(`Deleted product`);
    } catch (err) {
      console.log(err);
    }
  }

  const products = useSelector(allProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);

  useEffect(() => {
    dispatch(fetchCartByUserIdAsync(userId));
  }, [dispatch]);

  const cartOrderId = useSelector(CartByUserId);

  const orderProducts = useSelector(OrderProducts);

  useEffect(() => {
    dispatch(fetchOrderProductsByOrderIdAsync(userId)); //array of objects
  }, [dispatch]);

  let subTotal = 0;
  const addTotal = (p) => {
    subTotal = subTotal + p;
  };

  if (Array.isArray(orderProducts)) {
    const ordersMap = orderProducts.map((CartItem) => {
      // check to see if there is a local storage cart. if not, return message letting user know cart is empty
      if (orderProducts == []) {
        return <h3 style={{ marginLeft: '10px' }}>Shopping cart is empty.</h3>;
      } else {
        console.log(CartItem);

        // Function to take the guest cart item's product id and find the actual product for display information
        let singleProduct = (val) => {
          for (let i = 0; i < products.length; i++) {
            if (products[i].id == CartItem.productId) {
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
            {/* Get the subtotal */}
            {addTotal(CartItem.price * CartItem.quantity)}

            {/* Each individual cart item */}
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
                <img src={singleProduct('image')} className="cartImage"></img>
                <h3>
                  {singleProduct('name')}
                  <DeleteForeverIcon
                    onClick={() => deleteItem(CartItem.productId)}
                  />
                </h3>
                <p>
                  Quantity:{' '}
                  <button onClick={() => CartItem.quantity--}>-</button>{' '}
                  {CartItem.quantity}{' '}
                  <button onClick={() => cartItem.quantity--}>+</button>
                </p>
                <p>Price: ${CartItem.price}</p>
              </Paper>
            </Box>
          </div>
        );
      }
    });

    return (
      <div className="loggedinCartHolder">
        <h1 align="center">Cart</h1>
        {ordersMap}
        <div className="guestCartButtons" align="center">
          <h2 style={{ marginLeft: '10px' }}>
            Subtotal: ${subTotal.toFixed(2)}
            <Button variant="outlined" size="medium" sx={{ m: 2 }}>
              Checkout
            </Button>
            <Link to="/products">
              <Button variant="outlined" size="medium">
                Keep Shopping
              </Button>
            </Link>
          </h2>
        </div>
      </div>
    );
  }
};

export default LoggedCart;
