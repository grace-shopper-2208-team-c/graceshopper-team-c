import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../products/Products';

/**
 * COMPONENT
 */
const Home = (props) => {
  const name = useSelector((state) => state.auth.me.name);

  return (
    <div>
      <h3>Welcome, {name}!</h3>

      <Products />
    </div>
  );
};

export default Home;
