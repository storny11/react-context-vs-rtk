import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { setSelectedBookId } from './booksSlice';

export const Books = () => {
  const dispatch = useDispatch();

  const { books, isLoading } = useSelector(
    (state) => ({
      books: state.books.books,
      isLoading: state.books.isLoading,
    }),
    shallowEqual
  );

  const handleClick = (bookId) => {
    dispatch(setSelectedBookId(bookId));
  };

  return (
    <>
      <p>Books</p>
      {!isLoading ? (
        <ul>
          {books.map((book) => {
            return (
              <li
                key={book.id}
                onClick={() => handleClick(book.id)}
                role="presentation"
              >
                {book.title}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Loading . . .</p>
      )}
    </>
  );
};
