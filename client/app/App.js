import React from 'react';

import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import Products from '../features/products/Products';
import SingleProduct from '../features/products/SingleProduct';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
