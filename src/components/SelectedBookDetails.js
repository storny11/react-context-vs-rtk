import React from 'react';
import PropTypes from 'prop-types';

export const SelectedBookDetails = ({ bookList }) => {
  return (
    <ul>
      {bookList.map((book) => {
        return (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        );
      })}
    </ul>
  );
};

SelectedBookDetails.propTypes = {
  bookList: PropTypes.func.isRequired,
};
