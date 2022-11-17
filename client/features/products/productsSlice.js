import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  try {
    const { data } = await axios.get(`/api/products`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const removeProduct = createAsyncThunk('removeProduct', async (id) => {
  try {
    const { data } = await axios.delete(`/api/products/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addProduct = createAsyncThunk(
  'addProduct',
  async ({ name, description, image, price, quantity, category }) => {
    try {
      const { data } = await axios.post('/api/products', {
        name,
        description,
        image,
        price,
        quantity,
        category,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortAscending: (state, action) => {
      const price = products.product.price;
      price.sort((a, b) => a - b);
      return action.payload;
    },

    sortDescending: (state, action) => {
      const price = products.product.price;
      price.sort((a, b) => a - b).reverse();
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(removeProduct.fulfilled, (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const allProducts = (state) => {
  return state.products;
};

export default productsSlice.reducer;
