import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { Character, ResultData } from '../../utilities/types';

import './searchResults.scss';

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
    return <h2>Loading...</h2>;
  }

  if (!resultData && !success) {
    return <h2>Character has not found</h2>;
  }

  return (
    <div className='search-results'>
      <ul className="results-wrapper">
        {resultData?.results.map((character: Character) => (
          <li
            className="character"
            key={character.id}
            onClick={() => {
              searchParams.set('id', `${character.id}`)
              setSearchParams(searchParams);
              }}>
            <h3>{character.name}</h3>
            <p>gender: {character.gender}</p>
            <p>species: {character.species}</p>
            <p>status: {character.status}</p>
          </li>
        ))}
      </ul>
      <Pagination
        pageQuantity={resultData?.info.pages}
      />
    </div>
  );
}
