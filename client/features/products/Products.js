import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allProducts, fetchProducts } from './productsSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(allProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div>test</div>
    </div>
  );
};

export default Products;
