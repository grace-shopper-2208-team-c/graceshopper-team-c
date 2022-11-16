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

export const fetchOrderProductsByOrderIdAsync = 
createAsyncThunk(
  'cartProducts',
  async (orderId) => {
    try {
      const { data } = await axios.get(`/api/orders/cartProducts/${orderId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchProduct = 
createAsyncThunk(
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

//Added reducers
const userCartSlice = createSlice({
  name: 'user_cart',
  initialState: {
    order: {},
    orderProducts: {},
    product: ['placeholder']
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartByUserIdAsync.fulfilled, (state, action) => {
      state.order = action.payload; //returns orderId, $total, date, status, createdAt, updatedAt, and userId
    })
    builder.addCase(fetchOrderProductsByOrderIdAsync.fulfilled, (state, action) => {
      state.orderProducts = action.payload //returns orderId, productId, qty, price, createdAt, updatedAt
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload
    });
  },
});


export const CartByUserId = state => {
  return state.user_cart.order.id;
}

export const OrderProducts = state => {
  return state.user_cart.orderProducts;
}

export const showUserCart = (state) => {
  return state.user_cart;
};

export default userCartSlice.reducer;

//Added export for reducers
// export const {
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
//   removeItem,
// } = userCartSlice.actions;
