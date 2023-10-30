import { Component } from 'react';
import './search.scss';

export class Search extends Component {
  state = {
    query: '',
  };

  componentDidMount(): void {
    const data = localStorage.getItem('query') as string;
    this.setState({ query: data });
  }

  setStorage = () => {
    localStorage.setItem('query', this.state.query);
  }

  render() {
    return (
      <div className="search-wrapper">
        <input
          className="search-input"
          placeholder="Search artist"
          value={this.state.query}
          onChange={(e) => this.setState({ query: e.target.value })}
        />
        <button
          className="search-button"
          onClick={this.setStorage}
        />
      </div>
    );
  }
}
