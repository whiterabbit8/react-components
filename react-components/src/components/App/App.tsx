import { Component } from 'react';
import Search from '../Search/Search';

import './app.scss';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Search />
      </ErrorBoundary>
    );
  }
}
