import { Component } from 'react';

import './search.scss';

export class Search extends Component {
  state = {
    query: '',
    baseUrl: 'https://rickandmortyapi.com/api/character/',
    page: 1,
    data: [],
  };

  componentDidMount(): void {
    const value = localStorage.getItem('query') as string;
    value ? this.setState({ query: value }) : this.setState({ query: '' });
  }

  setStorage = () => {
    localStorage.setItem('query', this.state.query);
  };

  makeSearch = async (name: string) => {
    const searchValue = name.trim().replace(' ', '+');
    const searchUrl = name ? `name=${name}` : '';
    const response = await fetch(`${this.state.baseUrl}?page=${this.state.page}&${searchUrl}`,
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    console.log(data);
  };

  render() {
    return (
      <div className="container">
        <div className="search-wrapper">
          <input
            className="search-input"
            placeholder="enter rick and morty character name"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          />
          <button
            className="search-button"
            onClick={() => {
              this.setStorage();
              this.makeSearch(this.state.query);
            }}
          />
        </div>
      </div>
    );
  }
}
