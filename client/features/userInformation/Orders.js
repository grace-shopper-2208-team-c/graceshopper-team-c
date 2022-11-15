import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsByOrderIdAsync, userOrdersAll } from './ordersSlice';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { allProducts, fetchProducts } from '../products/productsSlice';

const Orders = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsByOrderIdAsync(id));
    dispatch(fetchProducts());
  }, []);
  const order = useSelector(userOrdersAll);
  const products = useSelector(allProducts);

  let orderTotal = 0;

  order.forEach((total) => {
    let newTotal = +total.price * total.quantity;
    orderTotal += newTotal;
  });

  const ordersMap = order.map((orderItem) => {
    let singleProduct = (val) => {
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == orderItem.productId) {
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
      <div className="orderItem">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& > :not(style)': {
              m: 1,
              padding: 3,
            },
          }}
        >
          <Paper
            elevation={3}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div>
              <img src={singleProduct('image')} width={250}></img>
            </div>
            <div
              style={{
                margin: 10,
              }}
            >
              <p>{singleProduct('name')}</p>
              <p>Quantity: {orderItem.quantity}</p>
              <p>Product Price: ${orderItem.price}</p>
            </div>
          </Paper>
        </Box>
      </div>
    );
  });

  return (
    <div className="orderDetails">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& > :not(style)': {
            m: 1,
            width: 488,
            padding: 4,
          },
        }}
      >
        <Paper elevation={8}>
          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <strong>Order Number: {id}</strong>
            {ordersMap}
            <br></br>
            <strong>Order Total: ${orderTotal}</strong>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default Orders;
