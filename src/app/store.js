import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import bookReducer from '../features/Books/booksSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    books: bookReducer,
  },
});
