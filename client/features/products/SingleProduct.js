import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdAsync, showSingleProduct } from './singleProductSlice';

const SingleProduct = () => {
  const { id } = useParams();

  const product = useSelector(showSingleProduct);

  console.log(product);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('fetching product');
    dispatch(fetchProductByIdAsync(id));
  }, []);

  return (
    <div className="single-product">
      <h3>Hello world</h3>
      <img src={product.image} />
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <h3>{product.quantity}</h3>
      <h3>{product.category}</h3>
      <h3>{product.price}</h3>
    </div>
  );
};

export default SingleProduct;
