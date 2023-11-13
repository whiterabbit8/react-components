import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import AppRouter from '../AppRouter/AppRouter';
import { SearchContextProvider } from '../../utilities/context';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <SearchContextProvider>
          <AppRouter />
        </SearchContextProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
