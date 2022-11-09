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
    name: 'singleProduct',
    initialState: {
      singleProduct: {},
      loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        console.log("Action payload is ", action.payload)
        state.singleProduct = action.payload; //likely culprit
      });
    },
});

export const showSingleProduct = (state) => {
    return state.singleProduct;
};
    
export default singleProductSlice.reducer;