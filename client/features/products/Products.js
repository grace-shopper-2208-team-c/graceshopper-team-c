import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { allProducts, fetchProducts } from './productsSlice';
import { NavLink } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(allProducts);
  // console.log(products);

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
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
              </div>
              {/* </NavLink> */}
            </div>
          ))
        : null}
    </div>
  );
};

export default Products;
