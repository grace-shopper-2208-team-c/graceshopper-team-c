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

//Added reducers
const userCartSlice = createSlice({
  name: 'user_cart',
  initialState: {
    order: {},
    orderProducts: {}
  },
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.cart.find((product) => product.id === action.payload.id);
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.cart.find((product) => product.id === action.payload);
      product.quantity++;
    },
    decrementQuantity: (state, action) => {
      const product = state.cart.find((product) => product.id === action.payload);
      if (product.quantity === 1) {
        product.quantity = 1
      } else {
        product.quantity--;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartByUserIdAsync.fulfilled, (state, action) => {
      return action.payload; //returns orderId, $total, date, status, createdAt, updatedAt, and userId
    });
  },
});

export const showUserCart = (state) => {
  return state.user_cart;
};

export default userCartSlice.reducer;

//Added export for reducers
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = userCartSlice.actions;
