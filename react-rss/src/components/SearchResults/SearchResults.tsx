import { Character } from '../../utilities/types';

import './searchResults.scss';

type SearchResultsProps = {
  characters: Character[];
};

export default function SearchResults({characters}: SearchResultsProps): JSX.Element {
  return (
    <ul className="results-wrapper">
      {characters.map((character: Character) => (
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
