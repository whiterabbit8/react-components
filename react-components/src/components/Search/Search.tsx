import { Component } from 'react';
import { Character } from '../../utilities/types';
import SearchResults from '../SearchResults/SearchResults';

import './search.scss';

export default class Search extends Component {
  state = {
    query: '',
    baseUrl: 'https://rickandmortyapi.com/api/character/',
    page: 1,
    characters: [],
    isLoading: true,
    hasFound: false,
    hasError: false
  };

  componentDidMount(): void {
    const value = localStorage.getItem('query')
      ? localStorage.getItem('query')
      : '';
    this.setState({ query: value });
    this.makeSearch(value).then(() => this.setState({ isLoading: false }));
  }

  setStorage = () => {
    localStorage.setItem('query', this.state.query);
  };

  makeSearch = async (name: string | null) => {
    this.setState({ isLoading: true, hasFound: false });
    const searchUrl = name ? `name=${name.trim().replace(' ', '+')}` : '';
    const response = await fetch(
      `${this.state.baseUrl}?page=${this.state.page}&${searchUrl}`,
      {
        method: 'GET',
      }
    );
    if (response.status === 200) {
      this.setState({ hasFound: true });
      const data = await response.json();
      const results: Character[] = data.results;
      this.setState({ characters: results });
    }
  };

  render() {
    if (this.state.hasError) throw new Error('App is crashed!');
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
              this.makeSearch(this.state.query).then(() =>
                this.setState({ isLoading: false })
              );
            }}
          />
        </div>
        <button className='error-button' onClick={() => this.setState({ hasError: true })}>Throw Error</button>
        {this.state.isLoading && <h2>Loading...</h2>}
        {!this.state.isLoading && !this.state.hasFound && (
          <h2>Character has not found</h2>
        )}
        {!this.state.isLoading && this.state.hasFound && (
          <SearchResults characters={this.state.characters} />
        )}
      </div>
    );
  }
}
