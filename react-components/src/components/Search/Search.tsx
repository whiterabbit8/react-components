import { Component } from 'react';

import './search.scss';
import { Character } from '../../utilities/types';
import SearchResults from '../SearchResults/SearchResults';

export default class Search extends Component {
  state = {
    query: '',
    baseUrl: 'https://rickandmortyapi.com/api/character/',
    page: 1,
    characters: [],
    isLoading: true
  };

  componentDidMount(): void {
    const value = localStorage.getItem('query') as string;
    value ? this.setState({ query: value }) : this.setState({ query: '' });
    this.makeSearch(value).then(() => this.setState({ isLoading: false }));
  }

  setStorage = () => {
    localStorage.setItem('query', this.state.query);
  };

  makeSearch = async (name: string) => {
    this.setState({ isLoading: true });
    const searchValue = name.trim().replace(' ', '+');
    const searchUrl = name ? `name=${searchValue}` : '';
    const response = await fetch(
      `${this.state.baseUrl}?page=${this.state.page}&${searchUrl}`,
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    const results: Character[] = data.results;
    this.setState({ characters: results });
    console.log(results);
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
              this.makeSearch(this.state.query).then(() => this.setState({ isLoading: false }));
            }}
          />
        </div>
        {this.state.isLoading && <h2>Loading...</h2>}
        {!this.state.isLoading && <SearchResults characters={this.state.characters} />}
      </div>
    );
  }
}
