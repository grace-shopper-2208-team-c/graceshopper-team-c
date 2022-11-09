import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
              <div className="product row">
                <Card
                  sx={{
                    maxWidth: 345,
                    minHeight: 400,
                  }}
                >
                  <NavLink
                    to={`/products/${product.id}`}
                    key={`All Products: ${product.id}`}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt="shoe picture"
                    />
                  </NavLink>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Type: {product.category}
                      <br />
                      Price: ${product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Product Details</Button>
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
