import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { QueryContext } from '../../utilities/context';

import './app.scss';
import AppRouter from '../AppRouter/AppRouter';

export default function App(): JSX.Element {
  const [query, setQuery] = useState('');

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <QueryContext.Provider value={{ query, setQuery }}>
          <AppRouter />
        </QueryContext.Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
