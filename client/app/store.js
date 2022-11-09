import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import productsSlice from '../features/products/productsSlice';
import singleProductSlice from '../features/products/singleProductSlice';

const store = configureStore({
  reducer: { auth: authReducer, products: productsSlice, single_product: singleProductSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
export * from '../features/products/productsSlice';
export * from '../features/products/singleProductSlice';
