import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdAsync, showSingleProduct } from './singleProductSlice';
import { addToCart } from '../cart/cartSlice'; //imported cart functions
//Styling MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const SingleProduct = () => {
  const { id } = useParams();

  const product = useSelector(showSingleProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductByIdAsync(id));
  }, []);

  //Added functionality to "add to cart" button
  return (
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
        <div className="single-product">
          <img className="single-image" src={product.image} />
          <div className="product-details">
            <h3>${product.price}</h3>
            <br />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
          </div>
          <br />
          <div>
            <Button className="single-add-cart" variant="outlined"
              size="medium"
              sx={{m:2}}>Add To Cart</Button>
            {/* <button onClick={() => 
        dispatch(addToCart({
          name, image, price
        }))}>Add To Cart</button> */}
          </div>
        </div>
      </Paper>
    </Box>
  );
};


export default SingleProduct;
