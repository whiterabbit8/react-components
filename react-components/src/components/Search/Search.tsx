import { Component } from 'react';

import './search.scss';

export class Search extends Component {
  state = {
    query: '',
    baseUrl: 'https://api.discogs.com/database/search',
    token: 'QiPSLEgIOHotOkcPbdiIyziqvUXUvoeoPJpjhpng',
    perPage: '5',
    page: '1',
    data: [],
  };

  componentDidMount(): void {
    const value = localStorage.getItem('query') as string;
    value ? this.setState({ query: value }) : this.setState({ query: '' });
  }

  setStorage = () => {
    localStorage.setItem('query', this.state.query);
  };

  makeSearch = async (artist: string) => {
    const searchValue = artist.trim().replace(' ', '+');
    const searchUrl = artist ? `q=${searchValue}&artist=${searchValue}` : '';
    const response = await fetch(
      `${this.state.baseUrl}?${searchUrl}&format=LP+album&per_page=${this.state.perPage}&page=${this.state.page}&token=${this.state.token}`,
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
            placeholder="Search artist"
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
