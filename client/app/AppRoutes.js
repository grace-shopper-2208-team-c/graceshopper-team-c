import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import SignupForm from '../features/auth/SignupForm';
import Home from '../features/home/Home';
import { me } from './store';
import Products from '../features/products/Products';
import SingleProduct from '../features/products/SingleProduct';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
<<<<<<< HEAD
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
        </Routes>
=======
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route to="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
>>>>>>> 205c5766c9287439cd3023e262e1d3aa77a0050b
      ) : (
        <Routes>

          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<SignupForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/*" element={<Products />} />

        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
