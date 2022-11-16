import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchCompleteOrders = createAsyncThunk(
  'fetchCompleteOrders',
  async () => {
    const { data } = await axios.get(`/api/orders/admin/orders`);

    return data;
  }
);

const ordersSlice = createSlice({
  name: 'completeOrders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompleteOrders.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const showAllOrders = (state) => {
  return state.completeOrders;
};

export default ordersSlice.reducer;
