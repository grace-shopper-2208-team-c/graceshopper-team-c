import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import SignupForm from '../features/auth/SignupForm';
import Cart from '../features/cart/Cart';
import Settings from '../features/userInformation/Settings';
import { me } from './store';
import Products from '../features/products/Products';
import SingleProduct from '../features/products/SingleProduct';
import Orders from '../features/userInformation/Orders';
import AdminHome from '../features/admin/AdminHome';
import AdminUsers from '../features/admin/AdminUsers';
import AdminProducts from '../features/admin/AdminProducts';
import AdminOrders from '../features/admin/AdminOrders';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn && isAdmin ? (
        <Routes>
          <Route path="/*" element={<Products />} />
          <Route to="/home" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/orders/:id" element={<Orders />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
        </Routes>
      ) : isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Products />} />
          <Route to="/home" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/orders/:id" element={<Orders />} />
        </Routes>
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
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders/:id" element={<Orders />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
