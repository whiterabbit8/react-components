import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from '../App/Loader/Loader';
import Pagination from '../Pagination/Pagination';
import { Character, ResultData } from '../../utilities/types';

import location from '../../assets/location.svg';

import './searchResults.scss';
import NotFound from '../NotFound/NotFound';

type SearchResultsProps = {
  loadPage: (page: number) => void;
  isLoading: boolean;
  resultData: ResultData | undefined;
  success: boolean;
};

export default function SearchResults({
  loadPage,
  isLoading,
  resultData,
  success,
}: SearchResultsProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });

  useEffect(() => {
    loadPage(Number(searchParams.get('page')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  if (isLoading) {
    return <Loader />;
  }

  if (!success) {
    return <NotFound />;
  }

  return (
    <div className="search-results">
      <ul className="search-results__list">
        {resultData?.results.map((character: Character) => (
          <li
            className="character"
            key={character.id}
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
        ))}
      </ul>
      <Pagination pageQuantity={resultData?.info.pages} />
    </div>
  );
}
