import Search from '../Search/Search';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './app.scss';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Search />
    </ErrorBoundary>
  );
}
