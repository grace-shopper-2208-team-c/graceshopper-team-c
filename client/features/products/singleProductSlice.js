import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductByIdAsync = createAsyncThunk('singleProduct', async (id) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  };
});

const singleProductSlice = createSlice({
    name: 'product',
    initialState: {
      product: {},
      loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.product = action.payload;
      });
    },
});

export const showSingleProduct = (state) => {
    return state.singleProduct.product;
};
  
  
const SingleProductReducer = singleProductSlice.reducer;
    
export default SingleProductReducer;