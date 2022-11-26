import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadGreeting = createAsyncThunk('greetings/loadGreeting', async () => {
  const response = await axios.get('http://localhost:3001/api/v1/greetings').catch((err) => {
    console.log('Error', err);
  });
  const res = response.data
  return res;
});

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: [],
  reducers: {},
  extraReducers: {
    [loadGreeting.fulfilled]: (state, action) => {
      const newState = action.payload.greeting
      return newState;
    },
  }
});

export default greetingsSlice.reducer;


