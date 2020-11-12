/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoading: false, error: null, books: [] };

const startLoading = (state) => {
  state.isLoading = true;
};

const loadingFailed = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const booksSlice = createSlice({
  name: 'booksSlice',
  initialState,
  reducers: {
    requestBooksPending: startLoading,
    requestBooksSuccess: (state, action) => {
      state.books = action.payload.books;
      state.isLoading = false;
      state.error = null;
    },
    requestBooksFailure: loadingFailed,
  },
});

export const {
  requestBooksPending,
  requestBooksSuccess,
  requestBooksFailure,
} = booksSlice.actions;

export default booksSlice.reducer;
