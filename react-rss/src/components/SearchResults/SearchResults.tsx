import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import NotFound from '../NotFound/NotFound';
import { Character } from '../../utilities/types';

import './searchResults.scss';
import { useSearchContext } from '../../utilities/context';

type SearchResultsProps = {
  loadPage: (page: number, search: boolean) => void;
  isLoading: boolean;
  success: boolean;
};

export default function SearchResults({
  loadPage,
  isLoading,
  success,
}: SearchResultsProps): JSX.Element {
  const [searchParams] = useSearchParams();

  const { resultData } = useSearchContext();

  useEffect(() => {
    loadPage(Number(searchParams.get('page')), false);
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
          <Card key={character.id} character={character} />
        ))}
      </ul>
      <Pagination pageQuantity={resultData?.info.pages} />
    </div>
  );
}
