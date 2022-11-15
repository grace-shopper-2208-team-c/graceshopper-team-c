import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchUserOrders = createAsyncThunk(
  'fetchUserOrders',
  async (userId) => {
    const { data } = await axios.get(`/api/orders/userorder/${userId}`);
    return data;
  }
);

export const fetchProductsByOrderIdAsync = createAsyncThunk(
  'cartProducts',
  async (id) => {
    try {
      const { data } = await axios.get(`/api/orders/cartProducts/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const userOrdersSlice = createSlice({
  name: 'userOrders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserOrders.fulfilled, (state, action) => {
      return action.payload;
    }),
      builder.addCase(
        fetchProductsByOrderIdAsync.fulfilled,
        (state, action) => {
          return action.payload;
        }
      );
  },
});

export const userOrdersAll = (state) => {
  return state.userOrders;
};
export default userOrdersSlice.reducer;
