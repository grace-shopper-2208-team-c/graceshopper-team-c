import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdAsync, showSingleProduct } from './singleProductSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';






const SingleProduct = () => {
  const { id } = useParams();

  const product = useSelector(showSingleProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductByIdAsync(id));
  }, []);

  return (
    <div className="single-product">
      <Card 
        sx={{ 
        maxWidth: 600, 
        minHeight: 800,
        }}
      />
      <CardMedia
        component="img"
        height="500"
        image={product.image}
        alt="selected product"
      />
      <CardContent>
        <h3>Selected Product</h3>
        <br />
        <Typography gutterBottom variant="h3">
          Price: ${product.price}
        </Typography>
        <br />
        <Typography gutterBottom variant="h3">
          {product.name}
        </Typography>
        <br />
        <Typography gutterBottom variant="h3">
          Description: {product.description}
        </Typography>
        <br />
        <Typography gutterBottom variant="h3">
          Category: {product.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Add To Cart</Button>
        <Button size="medium">Share</Button>
      </CardActions>
    </div>
  );
};

export default SingleProduct;
