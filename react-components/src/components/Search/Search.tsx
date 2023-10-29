import { Component } from "react";
import './search.scss';

type SearchProp = {
  query: string;
};

type SearchState = {
  isQuery: boolean;
};

export class Search extends Component<SearchProp, SearchState> {
  state = {
    isQuery: false,
  }
  render() {
    return (
      <div className="search-wrapper">
        <input className="search-input"/>
        <button className="search-button"/>
      </div>
    )
  }
}