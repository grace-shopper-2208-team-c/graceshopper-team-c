import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import productsSlice from '../features/products/productsSlice';
import singleProductSlice from '../features/products/singleProductSlice';
import userCartSlice from '../features/cart/cartSlice';
import singleUserSlice from '../features/userInformation/settingsSlice';
import userOrdersSlice from '../features/userInformation/ordersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsSlice,
    single_product: singleProductSlice,
    user_cart: userCartSlice,
    singleUser: singleUserSlice,
    userOrders: userOrdersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
export * from '../features/products/productsSlice';
export * from '../features/products/singleProductSlice';
export * from '../features/cart/cartSlice';
export * from '../features/userInformation/settingsSlice';
export * from '../features/userInformation/ordersSlice';
