import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const TOKEN = 'token';
const token = window.localStorage.getItem(TOKEN);
const initialState = [];

export const fetchAllUsers = createAsyncThunk('fetchAllUsers', async () => {
  const { data } = await axios.get('/api/users', {
    headers: { authorization: token },
  });

  return data;
});

const usersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const showAllUsers = (state) => {
  return state.allUsers;
};

export default usersSlice.reducer;
