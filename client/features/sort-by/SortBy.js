import React, { useEffect } from 'react';
import { allProducts, fetchProducts } from './productsSlice';



const SortBy = () => {
  const dispatch = useDispatch();
  const products = useSelector(allProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const sortAscending = () => {
    const prices = products.product.price;
    prices.sort((a, b) => a - b);   
    // this.setState({ prices })
  }

  const sortDescending = () => {
    const prices = products.product.price;
    prices.sort((a, b) => a - b).reverse();
    // this.setState({ prices })
  }

  return (
    <div className="dropdown">
      <label for="sort">Sort</label>
      <select>
      <option value="high-price" onClick={sortAscending}>Default</option>
        <option value="high-price" onClick={sortAscending}>High Price</option>
        <option value="low-price" onClick={sortDescending}>Low Price</option>
      </select>
    </div>
  );
};

export default SortBy;
