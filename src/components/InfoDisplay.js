import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { useAuthors } from '../contexts/authors.context';
import { SelectedBookDetails } from './SelectedBookDetails';

export const InfoDisplay = () => {
  const authorsState = useAuthors().state;

  const booksState = useSelector(
    (state) => ({
      isLoadingBooks: state.books.isLoading,
      books: state.books.books,
      selectedBookId: state.books.selectedBookId,
    }),
    shallowEqual
  );

  const getAuthorByBookId = (bookId) => {
    if (bookId) {
      const book = booksState.books.find((b) => b.id === bookId);
      const author = authorsState.authors.find((a) => a.id === book.authorId);
      return [
        {
          id: book.id,
          title: book.title,
          author: `${author.first_name} ${author.last_name}`,
        },
      ];
    }
    return [];
  };

  const getBooksByAuthorId = (authorId) => {
    const author = authorsState.authors.find((a) => a.id === authorId);
    return booksState.books
      .filter((b) => b.authorId === authorId)
      .map((b) => ({
        id: b.id,
        title: b.title,
        author: `${author.first_name} ${author.last_name}`,
      }));
  };

  return (
    <>
      <p>Info Display</p>
      {!booksState.isLoadingBooks && !authorsState.loading ? (
        <>
          <p>Books for the selected Author</p>
          <SelectedBookDetails
            bookList={getBooksByAuthorId(authorsState.selectedAuthorId)}
          />
          <p>Author for the Selected Book</p>
          <SelectedBookDetails
            bookList={getAuthorByBookId(booksState.selectedBookId)}
          />
        </>
      ) : (
        <p>Loading . . .</p>
      )}
    </>
  );
};
