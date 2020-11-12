import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

export const Books = () => {
  const { books, isLoading } = useSelector(
    (state) => ({
      books: state.books.books,
      isLoading: state.books.isLoading,
    }),
    shallowEqual
  );

  return (
    <>
      <p>Books</p>
      {!isLoading ? (
        <ul>
          {books.map((book) => {
            return <li key={book.id}>{book.title}</li>;
          })}
        </ul>
      ) : (
        <p>Loading . . .</p>
      )}
    </>
  );
};
