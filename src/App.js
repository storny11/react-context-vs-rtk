import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Local Dependencies
import { AuthorProvider } from './contexts/authors.context';
import { fetchBooks } from './features/Books/actions';
import { Authors } from './features/Authors';
import { Books } from './features/Books';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  // Trigger our initial API request on mount
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <main className="App-main">
      <div className="App-row">
        Select any book to match it with an author, or select any author to
        match them to their book(s)
      </div>
      <div className="App-container App-row">
        <div className="App-col">
          {/* We don't need to wrap <Books /> in anything
           * since our <App /> component is wrapped
           * in the redux <Provider />
           */}
          <Books />
        </div>
        <div className="App-col">
          {/* We only wrapping <Authors /> in
           * <AuthorProvider /> But we could also wrap it
           * around <App /> so the entire application has
           * access to the Author context we created, similar
           * to how we wrap <App /> in the <Provider store={store} />
           * from react-redux
           */}
          <AuthorProvider>
            <Authors />
          </AuthorProvider>
        </div>
      </div>
    </main>
  );
};

export default App;
