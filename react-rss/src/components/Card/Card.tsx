import { useSearchParams } from 'react-router-dom';
import { Character } from '../../utilities/types';

import location from '../../assets/location.svg';

import './card.scss';

type CardProps = {
  character: Character;
};

export default function Card({ character }: CardProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <li
      className="character"
      onClick={() => {
        searchParams.set('id', `${character.id}`);
        setSearchParams(searchParams);
      }}
    >
      <img
        className="character__img"
        src={character.image}
        alt={character.name}
      />
      <div
        className={`character__status character__status_${character.status.toLowerCase()}`}
      >
        {character.status}
      </div>
      <div className="character__info">
        <h3 className="character__name">{character.name}</h3>
        <p className="character__species">{character.species}</p>
        <p className="character__location">
          <img className="location-icon" src={location} alt="location" />
          {character.location.name}
        </p>
      </div>
    </li>
  );
}
