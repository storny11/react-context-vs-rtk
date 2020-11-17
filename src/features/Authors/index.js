import React from 'react';

// Local Dependencies
import { useAuthors } from '../../contexts/authors.context';

export const Authors = () => {
  // Note: We created an error handler but I'm not using it here
  const { state, dispatch } = useAuthors();

  const handleClick = (authorId) => {
    dispatch({ type: 'setSelectedAuthorId', payload: authorId });
  };

  return (
    <>
      <p>Authors</p>
      {!state.loading ? (
        <ul>
          {state.authors.map((author) => {
            return (
              <li
                key={author.id}
                onClick={() => handleClick(author.id)}
                role="presentation"
              >
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
