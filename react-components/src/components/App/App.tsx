import { Component } from 'react';
import Search from '../Search/Search';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Search />
      </ErrorBoundary>
    );
  }
}
