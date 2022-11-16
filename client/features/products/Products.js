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
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userId = useSelector((state) => state.auth.me.id);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let sortedArray = {...products};

  console.log('products before sort', products);

  function sortAscending() {
    return sortedArray.sort((a, b) => a.price - b.price);   
    // this.setState({ prices })
  };

  function sortDescending() {
    return sortedArray.sort((a, b) => a.price - b.price).reverse();
    // this.setState({ prices })
  };

  console.log('products after sort', sortedArray);

  const addToCart = (prod, price) => {
    if (isLoggedIn) {
      //logic for logged in user

    }
    else if (!isLoggedIn) {
      // logic for not logged in user
      let q = 1
      const totalPrice = price * q;

      const p = {
        productId: prod,
        quantity: q,
        price: totalPrice
      }

      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

      if (!existingCart[0]) {
        existingCart.push(p)
      }
      else {
        let itemExists = false;
        for (let i = 0; i < existingCart.length; i++) {
          if (p.productId == existingCart[i].productId) {
            console.log('product exists')
            existingCart[i].quantity += p.quantity
            itemExists = true
          }
      }
      if (!itemExists) {
        existingCart.push(p)
      }
    }
    localStorage.setItem('cart', JSON.stringify(existingCart));

  }
}

return (

  <div className="products">
    <div className="dropdown">
    <label for="sort">Sort</label>
      <select>
        <option value="default" onClick={"/products/"}>Default</option>
        <option value="high-price" onClick={sortDescending}>High Price</option>
        <option value="low-price" onClick={sortAscending}>Low Price</option>
      </select>
    </div>
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
                  height="290"
                  image={product.image}
                  alt="shoe picture"
                />
              </NavLink>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="productTitle">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Type: {product.category}
                  <br />
                  Price: ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  size="medium">
                  <NavLink
                    to={`/products/${product.id}`}
                    className="active"
                  >
                    Product Details
                  </NavLink>
                </Button>
                <Button
                  variant="outlined"
                  size="medium"
                  onClick={(e) => addToCart(product.id, product.price)}> Add to cart</Button>
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
