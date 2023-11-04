import { Component, ReactNode } from 'react';

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
        <h1 style={{ textAlign: 'center' }}>
          Sorry... Something went wrong
          <br />
          Please update the page
        </h1>
      );
    }

    return this.props.children;
  }
}
