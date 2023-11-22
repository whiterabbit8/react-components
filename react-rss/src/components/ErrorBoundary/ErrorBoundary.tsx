import { Component, ReactNode } from 'react';

import error from '../../assets/error.png';

import './errorBoundary.scss';

type Props = {
  children?: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <img className="error-img" src={error} alt={error} />
          <div>
            <h1 style={{ textAlign: 'center' }}>
              Sorry... Something went wrong
            </h1>
            <h1 style={{ textAlign: 'center' }}>Please update the page</h1>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
