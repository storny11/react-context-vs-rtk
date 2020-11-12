import React from 'react';

// Local Dependencies
import { useAuthors } from '../../contexts/authors.context';

export const Authors = () => {
  // Note: We created an error handler but I'm not using it here
  const { authors, loading } = useAuthors();
  return (
    <>
      <p>Authors</p>
      {!loading ? (
        <ul>
          {authors.map((author) => {
            return (
              <li key={author.id}>
                {author.first_name} {author.last_name}{' '}
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
