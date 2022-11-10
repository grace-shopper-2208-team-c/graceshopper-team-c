import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCartByUserIdAsync = createAsyncThunk(
  'userCart',
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/orders/cart/${userId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const userCartSlice = createSlice({
  name: 'user_cart',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartByUserIdAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const showUserCart = (state) => {
  return state.user_cart;
};

export default userCartSlice.reducer;
