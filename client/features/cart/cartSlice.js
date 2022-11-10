import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserOrdersByUserIdAsync = createAsyncThunk(
  'userOrders',
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/orders/userOrders/${userId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const userOrdersSlice = createSlice({
  name: 'user_orders',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserOrdersByUserIdAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const showAllUserOrders = (state) => {
  return state.user_orders;
};

export default userOrdersSlice.reducer;
