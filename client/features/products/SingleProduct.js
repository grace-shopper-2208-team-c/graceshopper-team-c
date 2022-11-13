import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdAsync, showSingleProduct } from './singleProductSlice';
import { addToCart } from '../cart/cartSlice'; //imported cart functions

const SingleProduct = () => {
  const { id } = useParams();

  const product = useSelector(showSingleProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductByIdAsync(id));
  }, []);

  //Added functionality to "add to cart" button
  return (
    <div className="single-product">
      <img className="single-image" src={product.image} />
      <div className="product-details">
        <h3>${product.price}</h3>
        <br />
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
      </div>
      <br />
      <div>
        <button className="single-add-cart">Add To Cart</button>
        {/* <button onClick={() => 
        dispatch(addToCart({
          name, image, price
        }))}>Add To Cart</button> */}
      </div>
    </div>
  );
};


export default SingleProduct;
