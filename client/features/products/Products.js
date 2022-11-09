import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { allProducts, fetchProducts } from './productsSlice';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(allProducts);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="products">
      {products && products.length
        ? products.map((product) => (
            <div key={`Single Product: ${product.id}`}>
              {/* <NavLink
                to={`/products/${product.id}`}
                key={`All Products ${product.id}`}
              > */}
              <div className="product row">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="shoe picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Shoe Type: {product.category}
                      <br />
                      Description: {product.description}
                      <br />
                      Price: ${product.price}
                      <br />
                      {product.quantity} in stock
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add to cart</Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Products;
