import { Component } from "react";
import './search.scss';

export class Search extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <input className="search-input" placeholder="Search artist"/>
        <button className="search-button"/>
      </div>
    )
  }
}