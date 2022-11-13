import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdAsync, showSingleProduct } from './singleProductSlice';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';


const SingleProduct = () => {
  const { id } = useParams();

  const product = useSelector(showSingleProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductByIdAsync(id));
  }, []);

  return (
    <div className="single-product">
      <img src={product.image} />
      <h3>${product.price}</h3>
      <br />
      <h3>{product.name}</h3>
      <br />
      <h3>{product.description}</h3>
      <br />
      <h3>Category: {product.category}</h3>
    </div>
  );
};


export default SingleProduct;
