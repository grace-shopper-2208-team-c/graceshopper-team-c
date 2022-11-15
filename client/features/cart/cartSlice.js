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
      state.order = action.payload; //returns orderId, $total, date, status, createdAt, updatedAt, and userId
    })
    .addCase(fetchOrderProductsByOrderIdAsync.fulfilled, (state, action) => {
      state.orderProducts = action.payload //returns orderId, productId, qty, price, createdAt, updatedAt
    })
    .addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload
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
