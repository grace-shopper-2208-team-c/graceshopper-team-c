import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProductByIdAsync,
  showSingleProduct,
} from '../products/singleProductSlice';

const SingleProductOrder = (props) => {
  //   let { id } = props;
  //   const dispatch = useDispatch();
  //   const product = useSelector(showSingleProduct);
  //   useEffect(() => {
  //     dispatch(fetchProductByIdAsync(id));
  //   }, []);
  //   console.log(id, product);

  return <div>test</div>;
};

export default SingleProductOrder;
