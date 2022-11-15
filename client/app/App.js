import React from 'react';

import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';


const App = () => {
  return (
    <>
    <div>
      <Navbar />
      </div>
    <div>
      <AppRoutes />
    </div>
    </>
  );
};

export default App;
