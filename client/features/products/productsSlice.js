import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  try {
    const { data } = await axios.get(`/api/products`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const allProducts = (state) => {
  return state.products;
};

export default productsSlice.reducer;
