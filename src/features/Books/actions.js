import {
  requestBooksPending,
  requestBooksSuccess,
  requestBooksFailure,
} from './booksSlice';

export const fetchBooks = () => async (dispatch) => {
  // set our loading state before making our request
  dispatch(requestBooksPending());
  try {
    // Wrap this in setTimeout to simulate server ...
    // ... request / response of 5(!) seconds
    setTimeout(async () => {
      const { books } = await import('../../data/books');
      dispatch(requestBooksSuccess({ books }));
    }, 5000);
  } catch (error) {
    // This will set loading to false and provide an error
    dispatch(requestBooksFailure(error));
  }
};
