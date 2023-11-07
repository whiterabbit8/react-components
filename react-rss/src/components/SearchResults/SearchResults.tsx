import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import { Character, ResultData } from '../../utilities/types';

import './searchResults.scss';
import { useNavigate } from 'react-router-dom';

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
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/react-rss/?page=${page}`);
    // There shouldn't be any dependencies but linter warns
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadPage(page);
    // There shouldn't be dependencies anymore but linter warns
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!resultData && !success) {
    return <h2>Character has not found</h2>;
  }

  return (
    <>
      <ul className="results-wrapper">
        {resultData?.results.map((character: Character) => (
          <li className="character" key={character.id}>
            <h3>{character.name}</h3>
            <p>gender: {character.gender}</p>
            <p>species: {character.species}</p>
            <p>status: {character.status}</p>
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        setPage={setPage}
        pageQuantity={resultData?.info.pages}
      />
    </>
  );
}
