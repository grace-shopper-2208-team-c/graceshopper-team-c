import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductByIdAsync = createAsyncThunk(
  'singleProduct',
  async (id) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const singleProductSlice = createSlice({
  name: 'single_product',
  initialState: {
    singleProduct: {},
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const showSingleProduct = (state) => {
  return state.single_product;
};

export default singleProductSlice.reducer;
