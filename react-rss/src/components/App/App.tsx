import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import AppRouter from '../AppRouter/AppRouter';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
