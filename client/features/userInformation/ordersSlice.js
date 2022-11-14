import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchUserOrders = createAsyncThunk(
  'fetchUserOrders',
  async (userId) => {
    const { data } = await axios.get(`/api/orders/userorder/${userId}`);
    console.log(userId);
    return data;
  }
);

const userOrdersSlice = createSlice({
  name: 'userOrders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserOrders.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const userOrdersAll = (state) => {
  return state.userOrders;
};
export default userOrdersSlice.reducer;
