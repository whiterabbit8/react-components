import { Component } from 'react';

import './errorButton.scss';

export default class ErrorButton extends Component {
  throwError = () => {
    throw new Error('App is crashed!');
  };
  render() {
    return (
      <button className="error-button" onClick={this.throwError}>
        Throw Error
      </button>
    );
  }
}
