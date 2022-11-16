import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const fetchSingleUser = createAsyncThunk(
  'fetchSingleUser',
  async (userId) => {
    const { data } = await axios.get(`/api/users/${userId}`);
    return data;
  }
);

const singleUserSlice = createSlice({
  name: 'singleUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const singleUser = (state) => {
  return state.singleUser;
};

export default singleUserSlice.reducer;
