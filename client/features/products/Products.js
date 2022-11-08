import React from 'react';
import { useDispatch } from 'react-redux';
import { allProducts, fetchProducts } from './productsSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(allProducts);

  return (
    <div>
      <div>test</div>
    </div>
  );
};

export default Products;
