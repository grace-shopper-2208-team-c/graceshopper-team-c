import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allProducts, fetchProducts } from './productsSlice';
import { NavLink } from 'react-router-dom';
import { SortBy } from 'react-instantsearch-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const SortBy = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const sortAndFilter=()=>{
        const results= products;
        if(category) 
        results = products.filter((it) => !category || it.category === category);
        if(priceOption)
        results = results.sort((it) => !priceOption || it.priceOption ==priceOption);
    
        setFilteredProducts(results);
    }

    return (
        <div className="products">

            <button className="sort-by"></button>
  
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
                      size="medium">Add to cart</Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            ))
          : null}
        </div>
    );
};






export default SortBy;