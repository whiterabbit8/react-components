import Search from '../Search/Search';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './app.scss';
import { BrowserRouter } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
