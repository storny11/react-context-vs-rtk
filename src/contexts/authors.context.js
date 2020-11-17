import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

export const authorContext = createContext({});

// Hook we can use to access our ...
// ... data throughout the application ...
// ... So long as it is down the component ...
// ... tree from <AuthorProvider>
export const useAuthors = () => {
  return useContext(authorContext);
};

// Utility hook to handle data fetching and manipulation.
// This could be considered your "Service" that contains business logic
export const useProvideAuthors = () => {
  // Local State setup
  const initialState = {
    authors: [],
    loading: false,
    error: null,
    selectedAuthorId: null,
  };

  const [state, dispatch] = useReducer((store, action) => {
    switch (action.type) {
      case 'setSelectedAuthorId':
        return { ...store, selectedAuthorId: action.payload };
      case 'setLoading':
        return { ...store, loading: action.payload };
      case 'setAuthors':
        return { ...store, authors: action.payload };
      case 'setError':
        return { ...store, authors: action.payload };
      default:
        throw new Error();
    }
  }, initialState);

  // Create a function to retreive data from ...
  // ... some endpoint. This could be its own ...
  // ... external "service" if you want
  const fetchAuthors = async () => {
    // Pretend we are retrieving data from an endpoint.
    // This could also be updated to look like...
    // const { authors } = axios.get('https://my-authors-api.com')
    try {
      const { authors } = await import('../data/authors'); // eslint-disable-line no-shadow
      dispatch({ type: 'setAuthors', payload: authors });
    } catch (err) {
      dispatch({ type: 'setError', payload: err });
    }
  };

  // Trigger our API request on mount
  useEffect(() => {
    // set our loading state before making our request
    dispatch({ type: 'setLoading', payload: true });
    // Wrap this in setTimeout to simulate server ...
    // ... request / response of 2.5 seconds
    setTimeout(() => {
      fetchAuthors();
      // reset loading state once async request has resolved
      dispatch({ type: 'setLoading', payload: false });
    }, 2500);
  }, []);

  return { state, dispatch };
};

export const AuthorProvider = ({ children }) => {
  const provideAuthors = useProvideAuthors();
  return (
    <authorContext.Provider value={provideAuthors}>
      {children}
    </authorContext.Provider>
  );
};

if (process.env.NODE_ENV !== 'production') {
  AuthorProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
}
