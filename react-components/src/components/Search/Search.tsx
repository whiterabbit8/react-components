import { Component } from 'react';
import './search.scss';

type SearchProps = {
  url: string;
  token: string;
  page: string;
  perPage: string;
}

export class Search extends Component<SearchProps> {
  state = {
    query: '',
  };

  componentDidMount(): void {
    const data = localStorage.getItem('query') as string;
    data ? this.setState({ query: data }) : this.setState({ query: '' })
  }

  setStorage = () => {
    localStorage.setItem('query', this.state.query);
  };

  makeSearch = async () => {
    const response = await fetch(`${this.props.url}?q=${this.state.query}&artist=${this.state.query}&format=LP+album&per_page=${this.props.perPage}&page=${this.props.page}&token=${this.props.token}`, {
      method: 'GET',
    });
    const data = await response.json();
    console.log(data);
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
        <button className="search-button" onClick={() => {
          this.setStorage();
          this.makeSearch();
        }} />
      </div>
    );
  }
}
