import { Component } from 'react';
import './searchResults.scss';
import { Character } from '../../utilities/types';

type SearchResultsProps = {
  characters: Character[];
};

export default class SearchResults extends Component<SearchResultsProps> {
  render() {
    return (
      <ul className="results-wrapper">
        {this.props.characters.map((character: Character) => (
          <li className="character" key={character.id}>
            <h3>{character.name}</h3>
            <p>gender: {character.gender}</p>
            <p>species: {character.species}</p>
            <p>status: {character.status}</p>
          </li>
        ))}
      </ul>
    );
  }
}
